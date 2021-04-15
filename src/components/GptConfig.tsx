import React, { useEffect } from 'react'
import * as variables from '../variables'
import { GptConfigType } from '../types'
import { pushAdSlotToRefresh, refreshViewPercentage, impressionViewable } from '../refresh'
export const GptConfig: React.FC<GptConfigType> = ({
    networkCode, refreshTimer = 0, target, enableLazyLoad, collapseEmptyDivs, eventImpressionViewable, eventSlotOnload, eventSlotRenderEnded, eventSlotRequested, eventSlotResponseReceived, eventSlotVisibilityChanged
}) => {
    let googletag: any
    
    const setConfigs = () => {
      variables.networkCode.set(networkCode)
      variables.refreshTimer.set(refreshTimer)
      if(enableLazyLoad) googletag.pubads().enableLazyLoad(enableLazyLoad)
      if(collapseEmptyDivs) googletag.pubads().collapseEmptyDivs(true)
    }

    const setTargeting = () => {
      target.forEach((el) => 
        googletag.pubads().setTargeting(el[0], el[1])
      )
    }

    const setEvents = () => {
      googletag.pubads().addEventListener('slotOnload',  (event: any) => {
        if(eventSlotOnload) eventSlotOnload(event)
        if(refreshTimer) pushAdSlotToRefresh(event.slot, googletag, Number(refreshTimer))
      })

      googletag.pubads().addEventListener('slotVisibilityChanged', (event: any) => { 
        if(eventSlotVisibilityChanged) eventSlotVisibilityChanged(event)
        if(refreshTimer) refreshViewPercentage(event)
      })

      googletag.pubads().addEventListener('impressionViewable', (event: any) => {
        if(eventImpressionViewable) eventImpressionViewable(event)  
        if(refreshTimer) impressionViewable(event)
      })

      if(eventSlotRenderEnded) googletag.pubads().addEventListener('slotRenderEnded', eventSlotRenderEnded)
      if(eventSlotRequested) googletag.pubads().addEventListener('slotRequested', eventSlotRequested)
      if(eventSlotResponseReceived) googletag.pubads().addEventListener('slotResponseReceived', eventSlotResponseReceived)
    }

    useEffect(() => {
        if(window.googletag) {
          googletag = window.googletag
          if(googletag.apiReady) {
            googletag.cmd.push(() => {              
              setConfigs()
              setEvents()
              setTargeting()
              googletag.enableServices()
            })
          }
        }
      }, [])

    return null
}
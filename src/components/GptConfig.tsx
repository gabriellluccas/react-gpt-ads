import React, { useEffect } from 'react'
import { GptConfigType } from '../types'
export const GptConfig: React.FC<GptConfigType> = ({
    enableLazyLoad, eventSlotOnload, eventSlotRequested
}) => {  
    let googletag: any
    
    const configs = () => {
      googletag.cmd.push(() => {
        console.log('pubads', googletag.pubads())
        if(enableLazyLoad) googletag.pubads().enableLazyLoad(enableLazyLoad)
        if(eventSlotRequested) googletag.pubads().addEventListener('slotRequested', eventSlotRequested)
        if(eventSlotOnload) googletag.pubads().addEventListener('slotOnload', eventSlotOnload)
      })
    }

    useEffect(() => {
        if(window.googletag) {
          googletag = window.googletag
          if(googletag.apiReady) configs()
        }
      }, [])

    return null
}
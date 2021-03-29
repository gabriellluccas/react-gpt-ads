import React, { useEffect } from 'react'
import { GptConfigType } from '../types'
export const GptConfig: React.FC<GptConfigType> = ({
    enableLazyLoad, eventSlotOnload, eventSlotRequested
}) => {  
    let googletag: any
    
    const configs = () => {
        if(enableLazyLoad) googletag.pubads().enableLazyLoad(enableLazyLoad)
        if(eventSlotRequested) googletag.pubads().addEventListener('slotRequested', eventSlotRequested)
        if(eventSlotOnload) googletag.pubads().addEventListener('slotOnload', eventSlotOnload)
    }

    useEffect(() => {
        if(window.googletag && !googletag) {
          googletag = window.googletag
          configs()
        }
      }, []) 

    return null
}
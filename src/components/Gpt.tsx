import React, { useEffect } from 'react'
import { GptType, ResponsiveSizeType } from '../types'
import { networkCode } from '../variables'

const Gpt: React.FC<GptType> = ({
  adUnit, name, size, target = [],
}) => {
    let googletag: any
    let adSlot: any = null
    
    const displayAd = () => {
      googletag.cmd.push(() => {
        adSlot = googletag
          .defineSlot(`${networkCode.get()}/${adUnit}`, generateSize(), name)
          .addService(googletag.pubads())
        mappingSize()
        googletag.enableServices()
        googletag.display(name)
      })
    }

    const setTargeting = () => {
      target.forEach((el) => 
        googletag.pubads().setTargeting(el[0], el[1])
      )
    }

    const generateSize = () => {
      const internalSize = size as ResponsiveSizeType
      if(!(typeof internalSize === 'object' && typeof internalSize[0][1] === 'object')) return size
      return internalSize.reduce((uniqueSizes: any, elSize: any) => {
        const haveSize: boolean = !!uniqueSizes.find((mapSize: [number, number]) => mapSize[0] === elSize[0] && mapSize[0] === elSize[0] )
        if(haveSize) uniqueSizes.push(haveSize)
        return uniqueSizes
      }, [])
    }

    const mappingSize = () => {
      const internalSize = size as ResponsiveSizeType
      if(!(typeof internalSize === 'object' && typeof internalSize[0][1] === 'object')) return
      let mapping = googletag.sizeMapping()
      internalSize.forEach(el => 
        mapping = mapping.addSize(el)
      )
      mapping = mapping.build()
      adSlot.defineSizeMapping(mapping)
    }

    useEffect(() => {
      if(window.googletag && !googletag) {
        googletag = window.googletag
        if(googletag.apiReady) {
          displayAd()
          googletag.cmd.push(() => {              
            setTargeting()
          })
        }
      }
    }, [])

    useEffect(() => {
      return () => {
        googletag.destroySlots([adSlot])
      }
    }, []);
    
    return(
      <div id={name}></div>
  )}

  export { Gpt }
  
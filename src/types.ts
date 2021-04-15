declare global {
  interface Window { googletag: any; }
}

export type SizeType = [number, number]
export type SingleSizeType = SizeType
export type MultiSizeType = SizeType[]
export type FluidSizeType = 'fluid'
export type ResponsiveSizeType = [SizeType, SizeType[] | SizeType][]
export type GptSizeType = SingleSizeType | MultiSizeType | FluidSizeType | ResponsiveSizeType 

export type TargetType = [string, string] | [string, string[]]
export type TargetArrayType = TargetType[]

export type GptType = {
  adUnit: string,
  name: string,
  size: GptSizeType,
}

export type GptConfigType = {
  networkCode: number | string,
  refreshTimer?: number | string,
  target?: TargetArrayType,
  enableLazyLoad?: any,
  collapseEmptyDivs?:  boolean | 'true'| 'expanded' | 'collapse', 
  eventImpressionViewable?: any,
  eventSlotOnload?: any,
  eventSlotRenderEnded?: any,
  eventSlotRequested?: any,
  eventSlotResponseReceived?: any,
  eventSlotVisibilityChanged?: any,
}
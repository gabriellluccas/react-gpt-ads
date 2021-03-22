declare global {
  interface Window { googletag: any; }
}

export type SizeType = [number, number]
export type SingleSizeType = SizeType
export type MultiSizeType = SizeType[]
export type FluidSizeType = 'fluid'
export type ResponsiveSizeType = [SizeType, SizeType[] | SizeType][]
export type GptSizeType = SingleSizeType | MultiSizeType | FluidSizeType | ResponsiveSizeType 

export type GptType = {
  adUnit: string,
  name: string,
  size: GptSizeType,
}
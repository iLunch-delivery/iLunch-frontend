export interface CarouselProps {
  images: Array<Array<{ url: string; title?: string }>>
  imageHeight: number
  imageWidth?: number
  height?: number
}

import NextImage, { ImageProps } from 'next/image'

interface ImageInterface extends ImageProps {
  height:number,
  width:number,
  src:string,
  alt:string,
  style?:any,
  className?:string,
  layout?: 'fixed' | 'intrinsic' | 'fill' | 'responsive' | undefined
}
export const Image = (props:ImageInterface) => {
  const { height, width, src, alt, style, className, layout } = props
  return <div

    style={{
      height: (layout === 'responsive' ? '100%' : height),
      width,
      ...style
    }}
    className={'relative  ' + className}
  >
    {
      src.includes('https')
        ? <img
        height={height}
        width={width}
        src={src}
        alt={alt}
      />
        : <NextImage
        layout={layout}
        height={height}
        width={width}
        src={src}
        alt={alt}
      />

    }
  </div>
}

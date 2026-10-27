/* eslint-disable react/no-unknown-property */
import type { SVGProps } from '@/types/ui/iconTypes'

const Svg = ({
  children, id, viewBox = '0 0 24 24',
  class: className, hidden,
  width = '24', height = '24',
  fill = 'transparent', stroke = 'currentColor', strokeWidth = '2', strokeLinecap = 'round', strokeLinejoin = 'round'
}:
  SVGProps
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id={id}
    viewBox={viewBox}
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    stroke-width={strokeWidth}
    stroke-linejoin={strokeLinejoin}
    stroke-linecap={strokeLinecap}
    hidden={hidden}
    class={`${className} h-full w-full pointer-events-none`}
  >
    {children}
  </svg>
)

export const IconSearch = () => (
  <Svg>
    <path d='M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
    <path d='M21 21l-6 -6' />
  </Svg>
)

export const IconTheme = ({ current }: { current: 'dark' | 'light' }) => (
  <Svg>
    { current === 'dark' && <> <path d='M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' /> <path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' /> </> }
    { current === 'light' && <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008' /> }
  </Svg>
)

export const IconUser = () => (
  <Svg>
    <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
    <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
  </Svg>
)

export const IconHeart = () => (
  <Svg>
    <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
  </Svg>
)

export const IconShoppingCart = () => (
  <Svg>
    <path d='M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
    <path d='M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
    <path d='M17 17h-11v-14h-2' />
    <path d='M6 5l14 1l-1 7h-13' />
  </Svg>
)

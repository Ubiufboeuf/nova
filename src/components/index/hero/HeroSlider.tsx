import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconChevron } from '@/components/ui/Icons'
import { SlideIndicator } from '@/components/ui/slider/SlideIndicator'
import { useState } from 'preact/hooks'

interface Slide {
  banner: string
  badge: string
  title: string
  description: string
  btn: {
    label: string
    link: string
  }
}

const slides: Slide[] = [
  {
    banner: '/hero1.png',
    badge: 'Semana del audio',
    title: 'Hasta 24% OFF en auriculares y parlantes',
    description: 'Cancelación de ruido, sonido de alta fidelidad y hasta 12 cuotas sin recargo.',
    btn: { label: 'Ver ofertas de audio', link: '/category/audio' }
  },
  {
    banner: '/hero2.png',
    badge: 'Tecnología',
    title: 'Celulares, notebooks y tablets en cuotas',
    description: 'Las mejores marcas con garantía oficial y envío a todo el país.',
    btn: { label: 'Ver tecnología', link: '/category/tecnologia' }
  },
  {
    banner: '/hero3.png',
    badge: 'Electrodomésticos',
    title: 'Renová tu cocina y tu hogar',
    description: 'Heladeras, lavarropas y más con retiro gratis en sucursal.',
    btn: { label: 'Ver electrodomésticos', link: '/category/electrodomesticos' }
  }
]

export function HeroSlider () {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const { badge, title, description, btn } = slides[currentSlideIndex]

  function previousSlide () {
    setCurrentSlideIndex(currentSlideIndex <= 0 ? slides.length - 1 : currentSlideIndex - 1)
  }

  function nextSlide () {
    setCurrentSlideIndex(currentSlideIndex >= slides.length - 1 ? 0 : currentSlideIndex + 1)
  }
  
  return (
    <div class='row-span-full relative h-96 w-full rounded-lg overflow-hidden bg-slate-100'>
      { slides.map(({ banner }, idx) => (
        <img key={banner} src={banner} class={`${currentSlideIndex === idx ? 'active' : ''} absolute z-0 h-full w-full object-cover transition-opacity opacity-0 [.active]:opacity-100`} />
      )) }
      <div class='absolute z-1 h-full w-full bg-linear-to-r from-page/70 to-50% to-page/0' />
      <div class='absolute z-2 h-full w-full flex flex-col p-10 gap-4'>
        <span class='w-fit h-fit rounded p-1 px-2 text-xs font-bold uppercase bg-accent text-slate-50'>{badge}</span>
        <h1 class='w-90 text-4xl font-[850] text-balance'>{title}</h1>
        <p class='w-90 text-sm text-pretty text-slate-700'>{description}</p>
        <Button type='link' href={btn.link} color='primary' class='w-fit h-fit p-2.5 px-5 rounded-md text-sm font-semibold'>
          {btn.label}
        </Button>
      </div>
      <div class='absolute z-3 pl-10 pr-6 bottom-5 h-8 w-full flex items-center gap-2'>
        <div class='flex gap-2 mr-auto'>
          <SlideIndicator name='hero-slider-indicator' onChange={() => setCurrentSlideIndex(0)} active={currentSlideIndex === 0} />
          <SlideIndicator name='hero-slider-indicator' onChange={() => setCurrentSlideIndex(1)} active={currentSlideIndex === 1} />
          <SlideIndicator name='hero-slider-indicator' onChange={() => setCurrentSlideIndex(2)} active={currentSlideIndex === 2} />
        </div>
        <Button color='neutral' class='size-9 rounded-full' onClick={previousSlide}>
          <Icon class='size-5 rotate-180'>
            <IconChevron />
          </Icon>
        </Button>
        <Button color='neutral' class='size-9 rounded-full' onClick={nextSlide}>
          <Icon class='size-5'>
            <IconChevron />
          </Icon>
        </Button>
      </div>
    </div>
  )
}

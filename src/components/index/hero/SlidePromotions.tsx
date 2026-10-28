const promotions = [
  {
    id: 'p1',
    badge: 'Novedad',
    title: 'Smartwatches con GPS y AMOLED',
    price: 7490,
    link: '/',
    image: '/heroP1.png'
  },
  {
    id: 'p2',
    badge: 'Hasta 22% OFF',
    title: 'Smart TV 4K QLED y Google TV',
    price: 24990,
    link: '/',
    image: '/heroP2.png'
  }
]

export function SlidePromotions () {
  return promotions.map(({ id, link, badge, title, price, image }) => (
    <a
      key={id}
      href={link}
      class='group flex flex-1 items-center gap-3 overflow-hidden rounded-lg border bg-elev border-line p-4 transition-shadow hover:shadow-md shadow-slate-400'
    >
      <div class='min-w-0 flex-1'>
        <p class='text-[11px] font-bold uppercase tracking-wider text-accent'>{badge}</p>
        <p class='mt-1 text-base font-bold leading-snug'>{title}</p>
        <p class='mt-1 text-sm text-slate-500'>Desde $ {price}</p>
        <span class='mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand'>
          Ver más
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' class='lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5' aria-hidden='true'>
            <path d='M5 12h14' />
            <path d='m12 5 7 7-7 7' />
          </svg>
        </span>
      </div>
      <img src={image} loading='lazy' class='h-28 w-28 shrink-0 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105' />
    </a>
  ))
}

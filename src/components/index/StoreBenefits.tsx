import { Icon } from '../ui/Icon'
import { IconCredit, IconReload, IconStore, IconTruck } from '../ui/Icons'

const benefits = [
  {
    id: 'free-shipping',
    title: 'Envío gratis',
    description: 'En compras desde $ 2.500',
    icon: IconTruck
  },
  {
    id: 'installments',
    title: '12 cuotas sin recargo',
    description: 'Con tarjetas seleccionadas',
    icon: IconCredit
  },
  {
    id: 'store-pickup',
    title: 'Retiro en 2 horas',
    description: 'En 8 tiendas del país',
    icon: IconStore
  },
  {
    id: 'returns',
    title: '30 días para cambios',
    description: 'Devolución sin vueltas',
    icon: IconReload
  }
]

export function StoreBenefits () {
  return (
    <section class='h-16 w-full px-5'>
      <div class='h-full w-full flex justify-between items-center rounded-lg overflow-hidden border border-line'>
        { benefits.map(({ id, icon: BenefitIcon, title, description }) => (
          <div key={id} class='w-full h-full flex items-center px-3 gap-3 not-last:border-r border-line'>
            <Icon class='size-7 *:stroke-2 text-brand'>
              <BenefitIcon />
            </Icon>
            <div class='flex flex-col'>
              <strong class='text-sm text-slate-700'>{title}</strong>
              <span class='text-xs text-slate-600'>{description}</span>
            </div>
          </div>
        )) }
      </div>
    </section>
  )
}

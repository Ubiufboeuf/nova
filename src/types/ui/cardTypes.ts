export interface ProductCardProps {
  id: string
  badges: { type: 'discount' | 'new', value: string }[]
  image: string
  brand: string
  link: string
  product: string
  rating: { votes: number, value: number }
  price: {
    base: { currency: string, value: number },
    offer: { currency: string, value: number }
  }
  cuotes: null | {
    quantity: number,
    amount: { currency: string, value: number }
  }
  stockState: 'enough' | 'few' | 'none',
  class?: string
}

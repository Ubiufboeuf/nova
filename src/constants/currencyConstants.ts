import type { Currency } from '@/types/ui/currencyTypes'

export const DEFAULT_CURRENCY = 'UYU' as const
export const CURRENCIES = ['UYU', 'USD', 'EUR', 'GBP', 'JPY'] as const
export const CURRENCY_SYMBOL: Record<Currency, string> = {
  UYU: '$',
  USD: 'U$S',
  EUR: '€',
  GBP: '£',
  JPY: '¥'
}

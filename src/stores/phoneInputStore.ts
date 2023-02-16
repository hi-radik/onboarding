import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface PhoneState {
  phone: string
  change: (e:any) => void
}

export const usePhoneInputStore = create<PhoneState>()(
  devtools(

      (set) => ({
        phone: '123',
        change: (e) => set(state => ({ phone: e}))
      }),
      {
        name: 'phone-storage',
      }

  )
)
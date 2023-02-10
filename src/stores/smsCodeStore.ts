import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface SmsCodeStore {
  smsCode: object
  change: (e:any) => void
}

export const usePhoneCodeStore = create<SmsCodeStore>()(
  devtools(
    persist(
      (set) => ({
        smsCode: {
        },
        change: (e) => set(state => ({ smsCode: e}))
      }),
      {
        name: 'phone-storage',
      }
    )
  )
)
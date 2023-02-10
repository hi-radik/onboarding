import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface SmsCodeStore {
  smsCode: any
  change: (e:any) => void
}

export const usePhoneCodeStore = create<SmsCodeStore>()(
  devtools(
    
      (set) => ({
        smsCode: [],
        change: (e) => set(state => ({smsCode: e}))
      }),
      {
        name: 'sms-code-storage',
      }

  )
)
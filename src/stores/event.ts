import type { EventState, PassengerData} from '@/types'
import { defineStore } from 'pinia'
export const useEventStore = defineStore('event', {
  state: (): EventState => ({
    event: null
  }),
  actions: {
    setEvent(event: PassengerData): void {
      this.event= event
    }
  }
})
import { defineStore } from 'pinia'

export const useAppHistoryStore = defineStore('historyStore', {
  state: () =>
    <
      {
        history: string[]
        enter: boolean
      }
    >{
      history: [],
      enter: true,
    },

  getters: {
    goBackAvailable: (state): boolean => {
      return state.history.length > 1
    },
  },

  actions: {
    addRouteToHistory(routeName: string) {
      this.history.push(routeName)
    },

    previousRouteName(): string {
      if (history.length > 1) {
        return this.history.splice(this.history.length - 2)[0]
      }
      return ''
    },
  },
})

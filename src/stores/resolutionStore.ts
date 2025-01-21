import { defineStore } from 'pinia'

export const useResolutionStore = defineStore('resolutionStore', {
  state: () =>
    <
      {
        width: number
        height: number
      }
    >{ width: 0, height: 0 },

  actions: {
    updateResolution() {
      this.width = window.innerWidth
      this.height = window.innerHeight
    },
    init() {
      window.addEventListener('resize', this.updateResolution)
      this.updateResolution()
    },
  },
})

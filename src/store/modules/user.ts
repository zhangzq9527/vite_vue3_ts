import { defineStore } from 'pinia'
import fetchApi from '../../service/api/login/login'

export const useUserStore = defineStore({
  id: 'mian',
  state: () => ({
    name: '',
  }),
  //getters
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async login(params: any) {
      const res = await fetchApi.login(params)
      this.name = res.data.username
      return res
    },
  },
})

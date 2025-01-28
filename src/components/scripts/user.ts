import { usePageStore } from '@/stores/pageStore'
import { handleError } from './utils'
import axios from 'axios'
import { useResolutionStore } from '@/stores/resolutionStore'

export async function initUser(token: string | null = '') {
  if (!token) {
    token = localStorage.getItem('token')
  }

  axios.defaults.headers.common.Authorization = token

  let registered = false

  try {
    if (!token) {
      const { data }: { data: { message: string; token: string } } = await axios.post('/guest')
      token = data.token
    } else {
      const { data }: { data: { message: string; token: string; registered: boolean } } =
        await axios.post('/loginJWT')
      token = data.token

      registered = data.registered
    }
  } catch (err: unknown) {
    handleError(err)
  }

  if (token) {
    axios.defaults.headers.common.Authorization = token

    const page = usePageStore()
    await page.init(registered)
    useResolutionStore().init()

    localStorage.setItem('token', token)
  }
}

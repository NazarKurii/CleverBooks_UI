import { isAxiosError } from 'axios'

export function findInedxById<A extends { id: number }>(array: Array<A>, id: number) {
  return array.findIndex((item) => item.id == id)
}

export function handleError(error: unknown): void {
  if (isAxiosError(error)) {
    // Errors from an HTTP response (Axios specific)
    console.error('Error Response:', error.response?.data)
    console.error('Status Code:', error.response?.status)
    console.error('Headers:', error.response?.headers)
  } else if (error instanceof Error) {
    // General JavaScript errors
    console.error('Error Message:', error.message)
  } else {
    // Unknown error type
    console.error('Unknown Error:', error)
  }
}

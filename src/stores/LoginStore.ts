import EmailFormComponent from '@/components/home_page/login_form/email/EmailFormComponent.vue'
import { handleError } from '@/components/scripts/utils'
import axios, { isAxiosError } from 'axios'
import { defineStore } from 'pinia'
import { shallowRef, type Component, type ShallowRef } from 'vue'

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    email: '',
    password: '',
    name: '',
    surname: '',
    verification: {
      code: '',
      input: '',
    },
    loader: false,
    currentComponent: shallowRef(EmailFormComponent) as ShallowRef<Component>,
    userAgreementAccepted: false,
  }),

  getters: {
    emailValid: (state): boolean => {
      return (
        state.email.includes('@') &&
        state.email.lastIndexOf('.') > state.email.lastIndexOf('@') &&
        state.email.length > 4 &&
        state.email.lastIndexOf('.') + 2 <= state.email.length &&
        !state.email.includes(' ')
      )
    },

    codeValid: (state): boolean => {
      return state.verification.code == state.verification.input && state.userAgreementAccepted
    },

    usersInfoValid: (state): boolean => {
      return (
        state.name.length > 0 &&
        !state.name.includes(' ') &&
        state.surname.length > 0 &&
        !state.surname.includes(' ') &&
        state.password.length > 6 &&
        state.password.split('').findIndex((char) => '0123456789'.includes(char)) != -1 &&
        state.password.split('').findIndex((char) => isUpperCase(char)) != -1 &&
        !state.password.includes(' ')
      )
    },
  },

  actions: {
    async verifyEmail(): Promise<number> {
      try {
        const { data }: { data: { message: string; exists: boolean; verificationCode: string } } =
          await axios.post('verifyEmail', {
            email: this.email,
          })

        this.verification.code = data.verificationCode

        if (!data.exists) {
          return Register
        }
        return Login
      } catch (err: unknown) {
        handleError(err)
        return -1
      }
    },

    async SingUp(): Promise<string> {
      try {
        const {
          data,
        }: {
          data: {
            token: string
          }
        } = await axios.post('singup', {
          email: this.email,
          name: this.name,
          surname: this.surname,
          password: this.password,
        })

        return data.token
      } catch (err: unknown) {
        handleError(err)
        return ''
      }
    },

    async logIn(): Promise<string> {
      try {
        const {
          data,
        }: {
          data: {
            token: string
          }
        } = await axios.post('login', {
          email: this.email,

          password: this.password,
        })

        return data.token
      } catch (err: unknown) {
        if (isAxiosError(err)) {
          if (err.response?.status != 401 && isAxiosError(err)) {
            handleError(err)
          }
        }
        return ''
      }
    },

    close() {
      this.email = ''
      this.password = ''
      this.name = ''
      this.surname = ''
      this.verification.code = ''
      this.verification.input = ''
      this.currentComponent = EmailFormComponent
      this.loader = false
      this.userAgreementAccepted = false
    },
  },
})

export const Register = 0
export const Login = 1

function isUpperCase(char: string): boolean {
  if (char.length !== 1) {
    return false
  }

  return char === char.toUpperCase() && char !== char.toLowerCase()
}

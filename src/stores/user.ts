import type { User } from '../types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userStore = defineStore(
  'cp-user',
  () => {
    const user = ref<User>()
    const setUser = (value: User) => {
      user.value = value
    }
    const deleteUser = () => {
      user.value = undefined
    }
    return {
      user,
      setUser,
      deleteUser
    }
  },
  {
    persist: true
  }
)

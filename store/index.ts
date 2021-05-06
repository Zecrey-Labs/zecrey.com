import { createStore } from './createSore'
import { useLocalStore } from 'mobx-react-lite'

export function useModel() {
  return useLocalStore(() => ({
    theme: 'dark',
    setTheme(value: 'dark' | 'light') {
      this.theme = value
    }
  }))
}

const store = createStore(useModel)

export const Provider = store.Provider
export const Context = store.Context
export const useStore = store.useStore

/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import { createStore } from './createSore'
import { useLocalStore } from 'mobx-react-lite'

const platform = process.env.PLATFORM || 'yuansuan'

export function useModel() {
  return useLocalStore(() => ({
    platform,
    setPlatform(platform) {
      this.platform = platform
    },
  }))
}

const store = createStore(useModel)

export const Provider = store.Provider
export const Context = store.Context
export const useStore = store.useStore

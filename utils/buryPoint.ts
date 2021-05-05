/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

interface Props {
  category: string
  action?: string
  label?: string
  channel?: string
}

export const buryPoint = ({
  category = '智算未来',
  action = '点击',
  label = '',
}: Props) => {
  let channel = '0'
  try {
    channel = localStorage.getItem('source_channel')
  } catch (e) {}

  // @ts-ignore
  _czc.push(['_trackEvent', category, action, label, +channel])
}

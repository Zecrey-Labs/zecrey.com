/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import Link from 'next/link'
import { PLATFORM } from '@/constant'

interface LinkWithPrefixProps {
  path: string
  children?: React.ReactNode | string
}

export const LinkWithPrefix = ({ path, ...props }: LinkWithPrefixProps) => {
  const prefix = PLATFORM === 'yuansuan' ? '' : `/${PLATFORM}`
  return <Link {...props} href={`${prefix}/${path}`} />
}

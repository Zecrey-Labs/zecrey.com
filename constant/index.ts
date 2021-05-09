import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const META = {
  content: 'Zecrey',
  description: 'Zecrey',
  companyFullName: '数浪',
  title: 'Zecrey',
  basePath: publicRuntimeConfig.env.BASEPATH
    ? `/${publicRuntimeConfig.env.BASEPATH}`
    : ''
}

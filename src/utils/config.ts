export const buildEnv: string | undefined = process.env.REACT_APP_BUILD_ENV
export const isProd: boolean | undefined = process.env.REACT_APP_BUILD_ENV === 'prod'
export const isDev: boolean | undefined = process.env.REACT_APP_BUILD_ENV === 'dev'
export const isTest: boolean | undefined = process.env.REACT_APP_BUILD_ENV === 'test'
export const baseURL: string | undefined = process.env.REACT_APP_BASE_URL

import makeSotre from './src/store'
import startServer from './src/server'

export const store = makeSotre()
startServer(store)

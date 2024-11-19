import { main } from '@/src/main'
import { reverseProxy } from '@/src/reverse-proxy'

export * from './reverse-proxy'
export { initializeReverseProxy } from './reverse-proxy-init'
export * from './types'

main()

export default {
  async fetch(request: Request): Promise<Response> {
    return await reverseProxy(request)
  },
}

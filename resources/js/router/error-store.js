import Main from '@/components/main'

export default {
  path: '/error_store',
  name: 'error_store',
  meta: {
    hideInBread: true
  },
  component: Main,
  children: [
    {
      path: 'error_store_page',
      name: 'error_store_page',
      meta: {
        icon: 'ios-bug',
        title: '错误收集'
      },
      component: () => import('@/view/error-store/error-store.vue')
    }
  ]
}

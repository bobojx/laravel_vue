import Main from '@/components/main'

export default {
  path: '/error_logger',
  name: 'error_logger',
  meta: {
    hideInBread: true,
    hideInMenu: true
  },
  component: Main,
  children: [
    {
      path: 'error_logger_page',
      name: 'error_logger_page',
      meta: {
        icon: 'ios-bug',
        title: '错误收集'
      },
      component: () => import('@/view/single-page/error-logger.vue')
    }
  ]
}

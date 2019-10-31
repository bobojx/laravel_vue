import Main from '@/components/main'

export default {
  path: '/message',
  name: 'message',
  component: Main,
  meta: {
    hideInBread: true,
    hideInMenu: true
  },
  children: [
    {
      path: 'message_page',
      name: 'message_page',
      meta: {
        icon: 'md-notifications',
        title: '消息中心'
      },
      component: () => import('@/view/single-page/message/index.vue')
    }
  ]
}

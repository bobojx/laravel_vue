import Main from '@/components/main'

export default {
  path: '/system_setting',
  name: '系统设置',
  meta: {
    icon: 'logo-buffer',
    title: '系统设置'
  },
  component: Main,
  children: [
    {
      path: 'user',
      name: '用户管理',
      meta: {
        icon: '',
        title: '用户管理'
      },
      component: () => import('@/view/system_setting/user.vue')
    },
    {
      path: 'sys_menu',
      name: '系统菜单',
      meta: {
        icon: '',
        title: '系统菜单'
      },
      component: () => import('@/view/system_setting/user.vue')
    },
    {
      path: 'auth_node',
      name: '权限节点',
      meta: {
        icon: '',
        title: '权限节点'
      },
      component: () => import('@/view/system_setting/user.vue')
    },
    {
      path: 'auth_rule',
      name: '系统角色',
      meta: {
        icon: '',
        title: '系统角色'
      },
      component: () => import('@/view/system_setting/user.vue')
    },
    {
      path: '/error_logger/error_logger_page',
      name: '错误收集',
      meta: {
        icon: '',
        title: '错误收集'
      },
      component: () => import('@/view/single-page/error-logger.vue')
    }
  ]
}

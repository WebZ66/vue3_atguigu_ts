//创建用户相关的仓库

import { defineStore } from 'pinia'
import { userLoginApi } from '@/api/user'
import type { loginForm } from '@/api/type'
//创建用户小仓库
let useUserStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN')
    }
  },
  actions: {
    //用户登录
    userLogin(url: string, loginForm: loginForm) {
      userLoginApi(url, loginForm).then((res: any) => {
        this.token = res[0].token
        localStorage.setItem('TOKEN', this.token)
      })
    }
  },
  getters: {}
})

export default useUserStore

import Vue from 'vue'
import Router from 'vue-router'
//base
import Login from '@/components/base/Login'
import ChangePwd from '@/components/base/ChangePwd'
import SmsLogin from '@/components/base/SmsLogin'
//personal
import Personal from '@/components/pages/personal/Personal'
import Detail from '@/components/pages/personal/Detail'
import Withdraw from '@/components/pages/personal/Withdraw'
import WithdrawBank from '@/components/pages/personal/WithdrawBank'

//business
import Buy from '@/components/pages/business/Buy'
import Sell from '@/components/pages/business/Sell'
import Back from '@/components/pages/business/Back'
import Today from '@/components/pages/business/Today'
import History from '@/components/pages/business/History'
//password
import Password from '@/components/pages/password/Password'
//bankcard
import Card from '@/components/pages/bankcard/card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'usercenter/personal'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/changePwd',
      name: 'changePwd',
      component: ChangePwd
    },
    {
      path: '/smsLogin',
      name: 'smsLogin',
      component: SmsLogin
    },
    {
      path: '/',
      redirect: 'personal'
    },
    {
      path: '/usercenter/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/usercenter/personal/detail',
      component: Detail
    },
    {
      path: '/usercenter/personal/withdraw',
      name: 'withdraw',
      component: Withdraw
    },
    {
      path: '/usercenter/personal/withdrawbank',
      name: 'withdrawbank',
      component: WithdrawBank
    },
    {
      path: '/usercenter/card',
      name: 'card',
      component: Card
    },
    {
      path: '/usercenter/password',
      name: 'password',
      component: Password
    },
    {
      path: '/usercenter/business/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/usercenter/business/sell',
      name: 'sell',
      component: Sell
    },
    {
      path: '/usercenter/business/today',
      name: 'today',
      component: Today
    },
    {
      path: '/usercenter/business/back',
      name: 'back',
      component: Back
    },
    {
      path: '/usercenter/business/history',
      name: 'history',
      component: History
    }
  ],
  linkActiveClass: 'usercenter-info-active'
})

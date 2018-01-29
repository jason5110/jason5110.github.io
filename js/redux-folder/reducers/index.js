import { combineReducers } from 'redux'

//loadingManagerState
function loadingManagerState(state = {
  key: 'loading',
  showText: 'loading',
  visible: false,
}, action) {

  if (action.key !== state.key)
      return state

  switch (action.type) {
    case 'showLoading':
      return {
        ...state,
        showText: action.showLoading || 'loading',
        visible: true
      }

    case 'hideLoading':
      return {
        ...state,
        visible: false
      }

    default:
        return state
  }
}

//temp
const temp = (state = {
  navKey: 'temp',
  params: {}
}, action) => {

  if (action.navKey != state.navKey){
    return state
  }

  if (action.type == 'update')
    return {
      ...state,
      params: action.params || {},
    }
  // switch (action.type){
  //   case 'update':
  //     return {
  //       ...state,
  //       params: action.params || {},
  //     }

  //   default: break
  // }

  return state
}

//temp_coupons
let temp_coupons = [{
  id: 0,
  couponType: 'coupon',
  type: 0,
  typeName: '優惠券',
  unitName: '單品',
  value: 75,
  unit: '折',
  expiration_date: '2017.07.01 - 2017.08.31',
  can_use: true,
},{
  id: 1,
  couponType: 'coupon',
  type: 0,
  typeName: '折價券',
  unitName: '單品',
  value: 500,
  unit: '元',
  expiration_date: '2017.07.01 - 2017.08.31',
  can_use: true,
}, {
  id: 2,
  couponType: 'exchange',
  type: 1,
  typeName: '單筆消費',
  unitName: '單品',
  title: 'NIKE運動毛巾',
  description: '可至指定門市兌換商品',
  expiration_date: '2017.07.01 - 2017.08.31',
  can_use: true,
}, {
  id: 3,
  couponType: 'exchange',
  type: 1,
  typeName: '單筆消費',
  unitName: '單品',
  title: '球衣燙背號服務',
  description: '可至指定門市兌換商品',
  expiration_date: '2017.07.01 - 2017.08.31',
  can_use: false,
}, ]

const all_coupons = (state = {
  navKey: 'AllCoupons',
  coupons: temp_coupons,
}, action) => {

  if (action.navKey != state.navKey){
    return state
  }

  return {
    ...state, 
    coupons: action.coupons,
  }
}

import accountManager from './account/'
import store_advance_search from './store_advance_search/'
import activity_advance_search from './activity_advance_search/'
import notice from './notice/'

import {
  featured_main_state,
} from './featured/'

export default combineReducers({
  loadingManagerState,
  temp,
  // all_navs_currentState,
  
  all_coupons,
  accountManager,
  store_advance_search,
  activity_advance_search,
  notice,

  //featured
  featured_main_state,
})
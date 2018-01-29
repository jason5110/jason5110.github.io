import { AsyncStorage } from 'react-native'

  //temp_coupons
let init_advance_search = {
  class: '最新',
  brand: '全部', 
  store: '全部',
}

//accountManager
//KEY: User
export default function activity_advance_search(state = {
  key: 'activity_advance_search',
  advance_search: init_advance_search,
}, action) {
  
  if (!action.key) {
    return state
  }

  if (action.key !== state.key){
    return state
  }

  if (!(typeof action.advance_search === 'object')){
    return state
  }

  return {
    ...state,
    advance_search: action.advance_search
  }
}

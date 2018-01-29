// import { AsyncStorage } from 'react-native'

let init_advance_search = {
  county: '全部/不限',
  brand: '全部', 
  class: '全部',
}

export default function store_advance_search(state = {
  key: 'store_advance_search',
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

export default function notice(state = {
  key: 'notice',
  notice_list: [],
}, action) {
  
  if (!action.key) {
    return state
  }

  if (action.key !== state.key){
    return state
  }

  if (!Array.isArray(action.notice_list)){
    return state
  }

  return {
    ...state,
    notice_list: action.notice_list
  }
}

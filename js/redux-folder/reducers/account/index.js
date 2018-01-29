import { AsyncStorage } from 'react-native'

//accountManager
//KEY: User
export default function accountManager(state = {
  key: 'accountManager',
  user: temp_user,
}, action) {
  
  if (!action.key) {
    return state
  }

  if (action.key !== state.key){
    return state
  }

  // console.log('accountManager ' + JSON.stringify(action))

  AsyncStorage.setItem('User', JSON.stringify(user), (error) =>{
      if (error)
        console.log('set User error ' + JSON.stringify(error))           
  })
  // setUser(JOSN.stringify(action.user))
  return {
    ...state,
    user: action.user
  }
}


//temp_coupons
let temp_user = {
    id: 1,
    level: '新星級會員',
    point: 400,
    qrcode: 'AABBCCDD1335sgknsnf499SRINK3b9q2rbnb_349uksmxi49jnsu4AIDNKNNdkdvooqdANkdnS',
    qrcode_numbrt: 'C886 1033 0371',
    name: 'Test',
    phone: '0987654321',
    email: 'test7050@gmail.com',
    birthday: '1987/07/08',
    gender: '男',
    clothes_size: 'M',
    shoes_size: '40',
    like_sport_type: [
        '游泳 Swimming',
        '潛水 Scuba Diving',
        '跑步/越野跑 Running',
        '健走 Walking',
        '鐵人三項 Triathlon',
        '自行車 Cycling'
    ],
    numberOfCoupon: 6,
    numberOfActivity: 3,
    cumulative_amount: 4222,
    
    next_gate: 5100
}


Object.no_null_value_object = (obj) => 
  Object
  .entries(obj)
  .filter(([key, value])=>{
    return (value != null) || (value != undefined)
  })
  .reduce((accumulator, [key, value]) =>{
    if (typeof value == 'object'){
      accumulator[key]=Object.no_null_value_object(value)
      return accumulator
    }

    accumulator[key]=value
    return accumulator
  }, ({}))

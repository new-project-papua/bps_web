const defaultState = {
  user_id: '',
  first_name: '',
  last_name: ''
}

const userReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, user_id: action.payload.data.data._id, first_name: action.payload.data.data.first_name, last_name: action.payload.data.data.last_name}

  default:
    return state
  }
}

export default userReducer

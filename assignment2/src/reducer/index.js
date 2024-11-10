import profileReducer from "../Slices/profileSlice"

const rootReducer = combineReducers({
    
    profile: profileReducer,
    
  })
  
  export default rootReducer
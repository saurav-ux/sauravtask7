import {configureStore} from '@reduxjs/toolkit'
import  userDetail  from '../Features/UserDetailsSlice1';


const store = configureStore({
    reducer:{
       app:userDetail      //app is a key from which we access the data to all the components
    },
})

export default store;
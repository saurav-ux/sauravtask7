//We write all the logic here

import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"

//create action
export const createUser = createAsyncThunk(
    "createUser",
    async (data, {rejectWithValue})=>{
        console.log("data7", data);
    const response=  await fetch(
        "https://645fe346fe8d6fb29e284b90.mockapi.io/crud",
        {
        method :"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(data)
    })

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        rejectWithValue(error.response)
    }
})


//read action
export const showUser = createAsyncThunk('showUser',async(args,{rejectWithValue})=>{
    const response = await fetch("https://645fe346fe8d6fb29e284b90.mockapi.io/crud");

    try {
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})


//delete action
export const deleteUser = createAsyncThunk('deleteUser',async(id,{rejectWithValue})=>{
    const response = await fetch(
        `https://645fe346fe8d6fb29e284b90.mockapi.io/crud/${id}`,
        {method:'DELETE'}
        );

    try {
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})




export const userDetail =createSlice({
    name: 'userDetail',
    initialState:{
        users:[],
        loading:false,
        error :null,
        searchData:[]
    },

    reducers:{
        searchUser : (state,action)=>{
            state.searchData = action.payload
        }
    },
    extraReducers : {
        //We check the status of fetching (It help at the time of error finding)
    [createUser.pending]:(state)=>{
        state.loading=true; 
    },
    [createUser.fulfilled]:(state,action)=>{
        state.loading=false; 
        state.users.push(action.payload)      //Adding new post to server
    },
    [createUser.rejected]:(state,action)=>{
        state.loading=false; 
        state.users = action.payload.message
    },
    [showUser.pending]:(state)=>{
        state.loading=true; 
    },
    [showUser.fulfilled]:(state,action)=>{
        state.loading=false; 
        state.users =action.payload        // Fetchind data from server to display
    },
    [showUser.rejected]:(state,action)=>{
        state.loading=false; 
        state.users = action.payload.message
    },
    [deleteUser.pending]:(state)=>{
        state.loading=true; 
    },
    [deleteUser.fulfilled]:(state,action)=>{
        state.loading=false; 
        const {id} =action.payload   
        if(id){
            state.users = state.users.filter((item)=>item.id !==id)   //logic for deleting post
        }

        console.log("delete action",action.payload)


    },
    [deleteUser.rejected]:(state,action)=>{
        state.loading=false; 
        state.users = action.payload.message
    },
},
    
})

export default userDetail.reducer
export const {searchUser} = userDetail.actions   //way to export reducers
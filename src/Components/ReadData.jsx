import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUser } from '../Features/UserDetailsSlice1';
function ReadData() {

  const dispatch = useDispatch()
  //Extract following data from Store using useSelector
  const {users,loading ,searchData} = useSelector((state)=>state.app)
    useEffect(()=>{
        //sending data to showUser to slice(handle all actions)
         dispatch(showUser())
    },[])

    if(loading){
        return(<h2>Loading...</h2>)
    }

  return (
    <div>
        <br/>
       <h2><center>List of Posts</center></h2>
       <br/>
    <div className='container'>
       
        {users &&
         users
         .filter((item)=>{                   //logic for search function
             if(searchData.length === 0){
                return item;
             }
             else{
                return item.title.toLowerCase().includes(searchData.toLowerCase());  
             }
         })
         .map((item)=>                   //Display the fetched data
         <div className='con'>
            <div className='like'>   
              <div className='likeA'>
                <img src="post.jpg"  className='like1'></img> 
              </div>
            <div className='like2'>
               <p><b>{item.title}</b></p>
               <p>{item.body}</p>
            </div>
           <div className='like3'>
               <Button variant="danger"  onClick={() => dispatch(deleteUser(item.id))}>Delete</Button>  
           </div>
        </div>
    </div>
       
    
     )}

</div>

</div>
   



  )
}

export default ReadData

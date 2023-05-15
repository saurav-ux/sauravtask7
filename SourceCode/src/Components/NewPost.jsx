import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { createUser } from '../Features/UserDetailsSlice1';
import { useNavigate } from 'react-router-dom';

function NewPost() {
    const [users,setUsers] = useState({})
    const navigate = useNavigate()
    //dispatch handle the action of function writen on slice(handle all actions)
    const dispatch = useDispatch()

    function getData(e){
        //To get the data from user
         setUsers({...users,[e.target.name] : e.target.value})
        //  console.log(users)
    }

    function  handleSubmit(e){
        e.preventDefault()
        console.log("Users: ",users)
        //sending data to createUser to slice(handle all actions)
          dispatch(createUser(users))
    navigate('/read')

    }
  return (

  
    <div className='container'>
        <br/>
       <Form className='my-5'  onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>UserID</Form.Label>
        <Form.Control type="text" placeholder="Enter userID" name="userId" onChange={getData} required/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" name='title' onChange={getData} required/>
      </Form.Group> 
      <Form.Group className="mb-3" >
        <Form.Label>Body</Form.Label>
        <Form.Control type="text" placeholder="Enter Body" name='body' onChange={getData} required/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    </div>
  )
}

export default NewPost

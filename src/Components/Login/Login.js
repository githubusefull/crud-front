import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import {FaGit} from 'react-icons/fa';
import axios from 'axios';
function Login() {
  const initial = { email:"", password:"" };
  const [data, setData] = useState(initial);
  const { email, password} = data;
 
 function handleChange  (e) {
  const {name, value} = e.target;
  setData({...data, [name]:value});
 }
   async function  handleClick(e) {
    e.preventDefault();
    const post = await axios.post("http://localhost:4000/login", data);
    if(!post){
      console.log("Error");
    }
    console.log("Success");
  }

  return (
    <div className='login  text-start'>

      <div className='login-card'>
       <h4 className='text-center my-2'><FaGit className='git-icon'/> </h4>
          <Form  className="mb-8">
          
      <Form.Group className="mb-3" >
        <Form.Label className='text-white'>Email</Form.Label>
        <Form.Control 
        name="email"
        value={email}
        onChange={e => handleChange(e)}
        type="email" placeholder="Enter email" id='input'
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='text-white'>Password</Form.Label>
        <Form.Control 
        name="password"
        onChange={e => handleChange(e)}
        value={password}
        type="password" 
        placeholder="Password" 
        id='input'
        />
      </Form.Group>
     
      <Button variant="dark" onClick={e=>handleClick(e)}  className='text-center my-1'>
        Login
      </Button>
    </Form>
   
  

    </div>
    </div>
  )
}

export default Login
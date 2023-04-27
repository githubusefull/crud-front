import React, { useState } from 'react'
import { Button, Col, Form,  Row } from 'react-bootstrap';
import {FaGit} from 'react-icons/fa';
import './Register.css';
import axios from 'axios';

 const Register = () => {
  const initial = {name:"", phone:"", email:"", password:"", confirmpassword:"" };
  const [data, setData] = useState(initial);
 const {name, phone, email, password, confirmpassword} = data;
 function handleChange  (e) {
  const {name, value} = e.target;
  setData({...data, [name]:value});
 }
   async function  handleClick(e) {
    e.preventDefault();
    const post = await axios.post("http://localhost:4000", data);
    if(!post){
      console.log("Error");
    }
    console.log("Success");
  }
  return (
    <div className='register  text-start'>
   
    <div className='register-card'>


     <h4 className='text-center my-2'><FaGit className='git-icon'/> </h4>
        <Form>

        <Row className="mb-5">
        <Form.Group as={Col} md="6" >
          <Form.Label className='text'>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            id='input-form'
            onChange={e => handleChange(e)}
          />
      </Form.Group>
      <Form.Group as={Col} md="6" >
          <Form.Label className='text'>Phone</Form.Label>
          <Form.Control
            
            type="number"
            placeholder="Phone"
            value={phone}
            name="phone"
            id='input-form'
            onChange={e => handleChange(e)}

          />
      </Form.Group>
      <Form.Group as={Col} md="12"  className='my-3'>
          <Form.Label className='text'>Email</Form.Label>
          <Form.Control
           
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            id='input-form'
            onChange={e => handleChange(e)}

          />
      </Form.Group>
       
   
         
       
      <Form.Group as={Col} md="6" >
          <Form.Label className='text'>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            id='input-form'
            onChange={e => handleChange(e)}

          />
       </Form.Group>
       <Form.Group as={Col} md="6" >
          <Form.Label className='text'>Confirm Password</Form.Label>
          <Form.Control
            
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            name="confirmpassword"
            id='input-form'
            onChange={e => handleChange(e)}

          />
       </Form.Group>
       </Row>  
    <Button variant="dark" type='submit' className='  text-center' onClick={e=>handleClick(e)}>
      Register
    </Button>
    
  </Form>
 
  </div>
  </div>
  )
}

export default Register;
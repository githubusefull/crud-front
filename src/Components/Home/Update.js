import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import {FaGit} from 'react-icons/fa';
import '../Register/Register.css';
import { useNavigate, useParams } from 'react-router-dom';
const Update = () => {
    const initial = {name:"", phone:"", email:"", password:"", confirmpassword:"" };
    const [data, setData] = useState(initial);

const {id} =useParams();

   function handleChange  (e) {
    const {name, value} = e.target;
    setData({...data, [name]: value});
    setVal({...val, [name]: value});

   }
    const getThere = useNavigate();
    const [val, setVal] = useState("");

    async function getData() {
        const data = await axios.get(`https://crud-back-production.up.railway.app/${id}`);
        setVal(data.data);
        console.log(data.data);
    }
    useEffect(() => {
        getData();
    });
    const [errors, setErrors] = useState({});

    function Validation({values}){
      const errors = {}
       if(values.name === ""){
          errors.name = "Name Empty";
        }
       return errors;
    }
    async function handleClick(e) {
        e.preventDefault();
        const post = await axios.put(`https://crud-back-production.up.railway.app/${id}`, data);
        if (!post) {
          console.log("Error");
      }
      console.log("Success");
        getThere("/");
       setErrors(Validation(val));
    
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
          required
            type="text"
            placeholder="Name"
            value={val.name}
            name="name"
            id='input-form'
            onChange={e => handleChange(e)}
          />
          {errors.name && <p>{errors.name}</p>}
      </Form.Group>
      <Form.Group as={Col} md="6" >
          <Form.Label className='text'>Phone</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Phone"
            value={val.phone}
            name="phone"
            id='input-form'
            onChange={e => handleChange(e)}

          />
      </Form.Group>
      <Form.Group as={Col} md="12"  className='my-3'>
          <Form.Label className='text'>Email</Form.Label>
          <Form.Control
           required
            type="email"
            placeholder="Email"
            value={val.email}
            name="email"
            id='input-form'
            onChange={e => handleChange(e)}

          />
      </Form.Group>
       
   
         
       
      <Form.Group as={Col} md="6" >
          <Form.Label className='text'>Password</Form.Label>
          <Form.Control
          required
            type="password"
            placeholder="Password"
            value={val.password}
            name="password"
            id='input-form'
            onChange={e => handleChange(e)}

          />
       </Form.Group>
       <Form.Group as={Col} md="6" >
          <Form.Label className='text'>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Confirm Password"
            value={val.confirmpassword}
            name="confirmpassword"
            id='input-form'
            onChange={e => handleChange(e)}

          />
       </Form.Group>
       </Row>  
    <Button variant="dark" type='submit' className='text-center' onClick={e=>handleClick(e)}>
      Update
    </Button>
    
  </Form>
 
  </div>
  </div>
  )
}

export default Update
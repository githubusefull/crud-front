import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {BsTrash} from 'react-icons/bs';
import {FiEdit} from 'react-icons/fi';
import '../crud/Crud.css';
import { Link, useParams } from 'react-router-dom';


const  Home = () => {
 const [val, setVal] = useState([]);
 async function getData(){
  const data = await axios.get("http://localhost:4000");
  setVal(data.data);
  console.log(data.data);
}
async function handleDelete(id) {
  const del = await axios.delete(`http://localhost:4000/${id}`);
 if(!del){
  console.log("Error");
 }else {
  console.log("Success Deleted");
 }
}
useEffect(()=> {
getData();
},[]);
 return (
   
<div className='container'>

<table id="customers">
  <tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Password</th>
    <th>Confirm Password</th>
    <th>Edite</th>

  </tr>
 {/* Table */}
 {val.map(register => (
  <tr>
    <td key={register._id}>
      {register.name}
      </td>
    <td>{register.phone}</td>
    <td>{register.email}</td>
    <td>{register.password}</td>
    <td>{register.confirmpassword}</td>
    <td>
    <Link to={`/update/${register._id}`}>
            <span><FiEdit className='icon-edite1'/></span>
            </Link>
      <a href=''><BsTrash className='icon-edite2'onClick={()=>handleDelete(register._id)}/></a>

      </td>

  </tr>
  ))}


</table>

</div>

  )
}

export default Home
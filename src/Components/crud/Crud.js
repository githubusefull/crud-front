import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import {BsTrash} from 'react-icons/bs';
import {FiEdit} from 'react-icons/fi';
import './Crud.css';
function Crud() {
  const [data, setData] = useState([])

  const registerCollectionRef = collection(db, "register-persons")
  useEffect(() => {
    const GetRegister = async () => {
      try {
      const data = await getDocs(registerCollectionRef);
      const filterRegisterdata = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(filterRegisterdata);
      } catch (err) {
        console.error(err);
      }
  };
  GetRegister();
  }, );
  const deletRegister = async (id) => {
    const registerDoc = doc(db, "register-persons", id)
  await deleteDoc(deletRegister);
  };
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
  {data.map((register) => (
  <tr>
    <td>
      {register.name}
      </td>
    <td>{register.phone}</td>
    <td>{register.email}</td>
    <td>{register.password}</td>
    <td>{register.confirmpassword}</td>
    <td>
      <span><FiEdit className='icon-edite'/></span>
      <span><BsTrash/></span>

      </td>

  </tr>
  ))}
</table>

</div>

  )
}

export default Crud
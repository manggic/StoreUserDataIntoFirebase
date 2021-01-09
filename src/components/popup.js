
import React from 'react';
import {  GrClose } from "react-icons/gr";
import { IconContext } from "react-icons";

const PopUp  = ({ user }) =>{

    
    const close = () => {
          document.getElementsByClassName('popup')[0].style.display = 'none'
          document.getElementById('search').value= ''
    }

     return (
          <div className='popup'>
             
              <table class="table">
     <thead>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            
      
            <td> <GrClose  onClick={close}  className='float-right' /></td>
        </tr>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{ user.username }</td>
      <td>{ user.mobile }</td>
      <td>{ user.email }</td>
      <td>{ user.password }</td>
    </tr>
   
  </tbody>
</table>
     
          </div>
     )
      
}
export default PopUp;










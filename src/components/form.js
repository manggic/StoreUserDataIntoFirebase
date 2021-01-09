

import React from 'react'
import {  GrClose } from "react-icons/gr";
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import firebase from "firebase/app";


//var database = firebase.database();


const Form = () =>{

    const removeForm = () =>{
      document.getElementById('name').value = ''
      document.getElementById('email').value = ''
      document.getElementById('mobile').value= ''
      document.getElementById('password').value= ''
            document.getElementsByClassName('form')[0].style.display = 'none'   
     }

   const formSubmit = (e) => {
       e.preventDefault()
       console.log('submit');
       let name = document.getElementById('name').value
       let email = document.getElementById('email').value
       let mobile = document.getElementById('mobile').value
       let password = document.getElementById('password').value
      
      if( name && email && mobile && password ){firebase.database().ref('users/' + uuidv4()).set({
        username: name,
        email: email,
        mobile : mobile,
        password : password,
      }); 
    
        toast('Successfully added to DB', { type : 'success' }) 
        
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('mobile').value= ''
        document.getElementById('password').value= ''
  
        document.getElementsByClassName('form')[0].style.display = 'none'   
      } 
        else{
            toast('please enter full details', {type: 'error'})
        }  
   }

     return (
         <div className='form'>
         {/* <ToastContainer /> */}
             <form   onSubmit={  formSubmit }  >
               <GrClose onClick={removeForm} className='float-right' /> 
               <div class="form-group pt-4">
                 <label for="exampleInputEmail1">Full Name</label>
                 <input type="text" class="form-control" id="name"   aria-describedby="emailHelp" placeholder="Full name" />
               </div>
               <div class="form-group">
                 <label  for="exampleInputPassword1">Email address</label>
                 <input type="email" class="form-control" id="email"   placeholder="Email" />
               </div>
               <div class="form-group">
                 <label  for="exampleInputPassword1">Mobile No</label>
                 <input type="number" class="form-control" id="mobile" placeholder="Mobile" />
               </div>
               <div class="form-group">
                 <label  for="exampleInputPassword1">Password</label>
                 <input type="password" class="form-control" id="password"  placeholder="Password" />
               </div>
               <button type="submit" class="btn btn-primary">Submit</button>
             </form>
                      </div>
     )
}

export default Form;








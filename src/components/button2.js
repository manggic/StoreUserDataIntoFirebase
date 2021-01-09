
import React from 'react';
import firebase from "firebase/app";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import PopUp from './popup'

const ButtonTwo  = () =>{

    const [ user, setUser  ] = useState({})  
     

    const onClickTwo = async () =>{
        console.log('button2');
        
         let name = document.getElementById('search').value         
         if( name === ''){ toast('Please enter the input', {type: 'warning'}) }
         else{
            let data;  
            await   firebase.database().ref('/users/').once('value').then((snapshot) => {
            data = (snapshot.val()) || 'Anonymous';
             });  
            
         for(let [key, value] of Object.entries(data)){
             // console.log(  key , value );
             if(value.username === name ){
                 console.log(value);
                 setUser(value)
                 document.getElementsByClassName('popup')[0].style.display = 'block' 
                 data = 1
                 break
             }
         }
         if(data !== 1){
             toast('username not found sorry!!!', { type: 'error' })
             document.getElementById('search').value= ''
         }
         }
           
}

    return (
        <div className='d-flex flex-column'>
         <div className='btn2'>
            <ToastContainer />
             <input type="text" class="search" id="search"  aria-describedby="emailHelp" placeholder="Enter username" />
             <button onClick={onClickTwo}  className='btn btn-success btn-lg'>Get Data</button>
         </div>
         <PopUp  user = { user }  />
         </div>
    )
}

export default ButtonTwo;






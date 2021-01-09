
// const ButtonOne  = () =>{

// }
// export default ButtonOne;



import React from 'react';
import Form from './form'



const ButtonOne  = () =>{

     const onClickOne = () =>{
                    console.log('button1');
                    document.getElementsByClassName('form')[0].style.display = 'block'   

               //document.getElementsByClassName('App')[0].style.opacity = 0.5;
     }

        return (
             <div className='btn1'>
                 <button  onClick= {onClickOne} className='btn btn-primary btn-lg mb-4 ml-2'>Set Data</button>                
             </div>
        )
}

export default ButtonOne;






import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/form'

import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonOne from './components/button1'
import ButtonTwo from './components/button2'
import {  GrClose } from "react-icons/fa";

import firebase from "firebase/app";

import  firebaseConfig  from './components/configure'
import "firebase/database";

firebase.initializeApp(firebaseConfig);




function App() {
  return (
    <div className="App">
         <ButtonOne  />
         <ButtonTwo />
         <Form />

    </div>
  );
}

export default App;

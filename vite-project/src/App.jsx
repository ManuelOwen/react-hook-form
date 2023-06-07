import { useState } from 'react'
import React from 'react';
import './App.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


function App() {


  const schema = yup.object().shape({
    FullNames: yup.string().required("FullNames is required"),
    Email: yup.string().required("Valid Email is required"),
    Age: yup.number().positive().integer().required("Age is required"),
    Password: yup.string().min(4).max(8).required("Password is required"),
    ConfirmPassword: yup.string().oneOf([yup.ref("Password")]).nullable(),
  });
  
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: yupResolver(schema)
});


const sendDataToServer = (data) =>{
  console.log(data)
};
  return (
    <div className='form'>
      {<form onSubmit={handleSubmit(sendDataToServer)}style={{display:'flex',flexDirection:"column", }}>

        <input type="text" placeholder='FullNames' {...register("FullNames")} />
        <p>{errors.FullNames?.message}</p>

        <input type="text" placeholder='Email' {...register("Email")} />
        <p>{errors.Email?.message}</p>

        <input type="number" placeholder='Age'{...register("Age")} />
        <p>{errors.Age?.message}</p>

        <input type="text" placeholder='Password'{...register("Password")} />
        <p>{errors.Password?.message}</p>

        <input type="text" placeholder='ConfirmPassword'{...register("ConfirmPassword")} />
        <p>{errors.ConfirmPassword?.message}</p>

        <input type="submit" value="submit" style={{width:"50%"
      }} />
      </form> }
      
    </div>
  )
}

export default App

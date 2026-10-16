import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const delay = ()=>{
    return new Promise((r, rej)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }
    const onSubmit = async (data) => {
      await delay(5)
      console.log(data)
    }

  return (
    <>
    {isSubmitting && <div>Loading....</div>}
    <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username' {...register("username", { required: true, maxLength: {value: 20, message: "Bhaii 20 se zyada nahi hoga"}, minLength: {value: 5, message: "Bhaii 5 se kam nahi hoga"} })} type="text" name="username"/>
        {errors.username && <div>Error haii</div>}
        <br />
        <input placeholder='password' {...register("password")} type="password" name="password"/>
        <br />
        <input type="submit" value="Submit"/>
        <input disabled={isSubmitting} type='submit' value='Submit' />
      </form>
    </div>
    </>
  )
}

export default App

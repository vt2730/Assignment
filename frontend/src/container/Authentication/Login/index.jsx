import React from 'react'
import Login from '../../../components/Authentication/Login/Login'
import { ForLogin } from './Hooks'

const LoginMain = () => {
  const { LoginForm } = ForLogin()
  return (
    <>
      <Login LoginForm={LoginForm}/>
    </>
  )
}

export default LoginMain
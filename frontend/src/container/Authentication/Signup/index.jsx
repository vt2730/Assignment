import React from 'react'
import Signup from '../../../components/Authentication/Signup/Signup'
import { ForSignUp } from './Hooks'

const SignupMain = () => {
  const{signupForm} = ForSignUp()
  return (
    <div>
      <Signup signupForm={signupForm}/>
    </div>
  )
}

export default SignupMain
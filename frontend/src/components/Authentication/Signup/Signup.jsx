import React from 'react'
import logo from '../../../Images/Logo.png'
import style from "../Login/index.module.css"
import TextFieldInput from "../../../common/formfields/TextFieldInput"
import PasswordFieldInput from "../../../common/formfields/PasswordFieldInput"
import ButtonFieldInput from "../../../common/buttonField/ButtonFieldInput"
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const navigate = useNavigate()

  return (
    <div className={`h-screen w-full ${style.login_div} flex justify-center  `} >
      <form onSubmit={props.signupForm.handleSubmit} className={`w-full flex flex-col justify-center h-full items-center sm:min-w-fit `} >
        <div className={`h-[87%]  ${style.form_div}  bg-white flex flex-col p-5 items-center  justify-around  `}>

          <div className={``} >
            <img src={logo} alt="logo" />
          </div>
          <div className='flex flex-col gap-3 w-full px-9' >
            <span className={` text-2xl font-bold `}>Register
            </span>
            <p className={`text-sm text-slate-400`} >Already have an account<span className='text-sm font-semibold cursor-pointer text-blue-900' onClick={()=> navigate('/')}> Login</span></p>
          </div>
          <div className='flex flex-col gap-3 w-full'>
          <div className={`px-9 w-full`}>
              <TextFieldInput
                label="Name"
                lableCls="text-sm font-semibold pb-1"
                placeholder="Enter Name"
                textinputname="name"
                id='name'
                onChange={props.signupForm.handleChange}
                value={props.signupForm?.values.name}
                textnewclass={`w-full`}
                error={
                  props.signupForm.touched.name && Boolean(props.signupForm.errors.name)
                }
                helperText={
                  props.signupForm.touched.name && props.signupForm.errors.name
                }
                clickEnter={props.signupForm.handleSubmit}
              />
            </div>
            <div className={`px-9 w-full`}>
              <TextFieldInput
                label="Email"
                lableCls="text-sm font-semibold pb-1"
                placeholder="Enter Email id"
                textinputname="email"
                id='email'
                onChange={props.signupForm.handleChange}
                value={props.signupForm?.values.email}
                textnewclass={`w-full`}
                error={
                  props.signupForm.touched.email && Boolean(props.signupForm.errors.email)
                }
                helperText={
                  props.signupForm.touched.email && props.signupForm.errors.email
                }
                clickEnter={props.signupForm.handleSubmit}
              />
            </div>
            <div className={`px-9 w-full`} >
              <PasswordFieldInput
                label="Password"
                labelcls="text-sm font-semibold pb-1"
                placeholder="Enter password"
                passwordinputText="password"
                textnewclass={`w-full`}
                onChange={props.signupForm.handleChange}
                value={props.signupForm?.values.password}
                error={
                  props.signupForm.touched.password &&
                  Boolean(props.signupForm.errors.password)
                }
                helperText={
                  props.signupForm.touched.password && props.signupForm.errors.password
                }
                clickEnter={props.signupForm.handleSubmit}

              />
            </div>
            <div className={`px-9 w-full`} >
              <PasswordFieldInput
                label="Confirm Password"
                labelcls="text-sm font-semibold pb-1"
                placeholder="Enter password"
                passwordinputText="confirmPassword"
                textnewclass={`w-full`}
                onChange={props.signupForm.handleChange}
                value={props.signupForm?.values.confirmPassword}
                error={
                  props.signupForm.touched.confirmPassword &&
                  Boolean(props.signupForm.errors.confirmPassword)
                }
                helperText={
                  props.signupForm.touched.confirmPassword && props.signupForm.errors.confirmPassword
                }
                clickEnter={props.signupForm.handleSubmit}

              />
            </div>
          </div>

          <div className='flex flex-col gap-20 w-full'>
            <div className={` w-full flex justify-center px-9`} >
              <ButtonFieldInput
                name="Login"
                type="submit"
                variant="contained"
                buttonextracls={`!bg-blue-900 w-full !rounded-lg !py-3`}
                // loading={loader === true ? true : false}
              />
            </div>
          </div>
        </div>
      </form>

    </div>
  )
}

export default Signup
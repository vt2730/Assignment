import React from 'react'
import logo from '../../../Images/Logo.png'
import style from "./index.module.css"
import TextFieldInput from "../../../common/formfields/TextFieldInput"
import PasswordFieldInput from "../../../common/formfields/PasswordFieldInput"
import ButtonFieldInput from "../../../common/buttonField/ButtonFieldInput"

const Login = (props) => {
  return (
    <div className={`h-screen w-full ${style.login_div} flex justify-center  `} >
      <form onSubmit={props.LoginForm.handleSubmit} className={`w-full flex flex-col justify-center h-full items-center sm:min-w-fit `} >
        <div className={`h-[87%]  ${style.form_div}  bg-white flex flex-col p-5 items-center  justify-around  `}>

          <div className={``} >
            <img src={logo} alt="logo" />
          </div>
          <div className='flex flex-col gap-3 w-full px-9' >
            <span className={` text-2xl font-bold `}>Login
            </span>
            <p className={`text-sm text-slate-400`} >Don't have an account<span className='text-sm font-semibold cursor-pointer text-blue-900'> Sign up</span></p>
          </div>
          <div className='flex flex-col gap-3 w-full'>
            <div className={`px-9 w-full`}>
              <TextFieldInput
                label="Email"
                lableCls="text-sm font-semibold pb-1"
                placeholder="Enter Email id"
                textinputname="email"
                id='email'
                onChange={props.LoginForm.handleChange}
                value={props.ManagementForm?.values.email}
                textnewclass={`w-full`}
                error={
                  props.LoginForm.touched.email && Boolean(props.LoginForm.errors.email)
                }
                helperText={
                  props.LoginForm.touched.email && props.LoginForm.errors.email
                }
                clickEnter={props.LoginForm.handleSubmit}
              />
            </div>
            <div className={`px-9 w-full`} >
              <PasswordFieldInput
                label="Password"
                labelcls="text-sm font-semibold pb-1"
                placeholder="Enter password"
                passwordinputText="password"
                textnewclass={`w-full`}
                onChange={props.LoginForm.handleChange}
                value={props.ManagementForm?.values.password}
                error={
                  props.LoginForm.touched.password &&
                  Boolean(props.LoginForm.errors.password)
                }
                helperText={
                  props.LoginForm.touched.password && props.LoginForm.errors.password
                }
                clickEnter={props.LoginForm.handleSubmit}

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

export default Login
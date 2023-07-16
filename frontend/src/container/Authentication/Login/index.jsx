import React from 'react'
import Login from '../../../components/Authentication/Login/Login'
import { ForLogin } from './Hooks'
import SnackBarComponent from "../../../common/snackBar/SnackBar"

const LoginMain = () => {
  const { LoginForm,messageClose,
    notification, } = ForLogin()
  return (
    <>
      <Login LoginForm={LoginForm}/>

      <SnackBarComponent
        messageOpen={notification.open}
        messageClose={messageClose}
        notificationText={notification.message}
        subText={notification.subText}
        alertType={notification.alertType}
        borderClass={notification.borderClass}
      />
    </>
  )
}

export default LoginMain
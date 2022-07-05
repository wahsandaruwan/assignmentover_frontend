import InputBox from '../Elements/InputBox'
import MainButton from '../Elements/MainButton'

const Login = () => {
  return (
    <>
      <div className="page login">
        <div className="form login-form">
          <h2 className="sub-heading">Login</h2>
          <InputBox inputType="text" inputPlaceholder="Your Username..." />
          <InputBox inputType="password" inputPlaceholder="Your Password..." />
          <MainButton buttonText="Login" />
        </div>
      </div>
    </>
  )
}

export default Login

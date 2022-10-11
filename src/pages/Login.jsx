import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actionLogin } from '../store/actions';
import { ImProfile } from 'react-icons/im';
import LoginArea from '../styles/loginStyle';

const Login = ({ login, history:{ push } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const regExpEmail = /^\S+[@]\w+[.]\w+$/

  const cond = ( regExpEmail.test(email) && password.length > 5)

  const handleClick = () => {
    login({ email, password })
    push('/todo')
  }

  return (
    <LoginArea>
      <article>
        <section>
          Welcome To Todo List
        </section>
        <div>
          <span><ImProfile /></span>
          <input
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            placeholder="Email"
          />

          <input
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            placeholder="Password"
          />

          <button
            onClick={ handleClick }
            disabled={ !cond }
          >
            Sing In
          </button>
        </div>
      </article>
    </LoginArea>
  )
}

const mapDispatchtoProps = (dispatch) => ({
  login: (user) => dispatch(actionLogin(user)),
});

export default connect(null, mapDispatchtoProps)(Login);

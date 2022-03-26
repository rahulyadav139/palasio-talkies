import { useState, Fragment } from 'react';

import { LoginForm, SignupForm, Header } from '../../components';
import LoginImg from '../../assets/login.png';
import './AuthPage.css';

const AuthPage = props => {
  const [isLogin, setIsLogin] = useState(true);

  const authMethodSwitchHandler = () => {
    setIsLogin(prev => !prev);
  };

  return (
    <main className="main-auth-page">
      <section>
        <img className="img-responsive" src={LoginImg} alt="signup" />
      </section>
      <section>
        {isLogin ? (
          <LoginForm onSwitch={authMethodSwitchHandler} />
        ) : (
          <SignupForm onSwitch={authMethodSwitchHandler} />
        )}
      </section>
    </main>
  );
};
export { AuthPage };

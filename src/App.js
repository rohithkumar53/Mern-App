import logo from './logo.svg';
import './App.scss';
// import LoginForm from './components/imports/LoginForm';
import BaseLogin from './components/imports/BaseLogin';
import RegisterForm from './components/imports/RegisterForm';
import './assets/bg_img.jpg';

function App() {
  return (
    <div id="login">
      <div className="container">
        <div className="row login-box">
            <BaseLogin/>
            <RegisterForm/>
        </div>
      </div>
      
    </div>
  );
}

export default App;

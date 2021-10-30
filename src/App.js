import logo from './logo.svg';
import './App.scss';
import LoginForm from './components/imports/LoginForm';
import BaseLogin from './components/imports/BaseLogin';
import './assets/bg_img.jpg';

function App() {
  return (
    <div id="login">
      <div className="container">
        <div className="row login-box">
            <BaseLogin/>
            <LoginForm/>
        </div>
      </div>
      
    </div>
  );
}

export default App;

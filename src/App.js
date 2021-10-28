import logo from './logo.svg';
import './App.scss';
import LoginForm from './components/imports/LoginForm';

function App() {
  return (
    <div id="login">
      <div className="container">
        <div className="row login-box">
            <div className="col-lg-7 bg-color align-self-center">
              <LoginForm/>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

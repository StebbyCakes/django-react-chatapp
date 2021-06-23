import React from 'react';
import Cookies from 'js-cookie';
import ChatWindow from './chatwindow.js';
import Registration from './registration.js';
import Login from './login.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: !!Cookies.get('Authorization') ? 'chat' : 'login'
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  handleInput(event){
    this.setState({[event.target.name]: event.target.value});
  }

  async handleLogin(user) {
   const options = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'X-CSRFToken': Cookies.get('csrftoken'),
     },
     body: JSON.stringify(user),
   };
   const handleError = (err) => console.warn(err);
   const response = await fetch('/rest-auth/login/', options);
   const data = await response.json().catch(handleError);
   if (data.key) {
     Cookies.set('Authorization', `Token ${data.key}`);
     this.setState({selection: 'chat'});
   }
 }

   handleForm(selection) {
       this.setState({selection});
     }

   async handleRegistration(user) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/registration/', options);
    const data = await response.json().catch(handleError);
    if (data.key) {
      Cookies.set('Authorization', `Token ${data.key}`);
      this.setState({selection: 'chat'});
    }
  }

  async handleLogout() {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken'),
            },
          };
          const handleError = (err) => console.warn(err);
          const response = await fetch('/rest-auth/logout/', options).catch(handleError);
          if(response.ok) {
            Cookies.remove('Authorization');
            this.setState({selection: 'login'});
          }
      }

  render() {
    // const cookie = Cookies.get('Authorization');
    // console.log(cookie)
    return(
      <>
      <div className="background">
        <h1>Online Chat Log</h1>
        {this.state.selection === 'login' && <Login handleForm={this.handleForm} handleLogin={this.handleLogin}/>}
        {this.state.selection === 'register' && <Registration handleForm={this.handleForm} handleRegistration={this.handleRegistration}/>}
        {this.state.selection === 'chat' && <ChatWindow handleLogout={this.handleLogout}/>}
      </div>
      </>
    )
  }
}


export default App;

import { Component } from 'react';
import ChatSubmit from './chatsubmit.js';
import Cookies from 'js-cookie';

class ChatWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: [],
    }
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentDidMount(){
    fetch('/api/v1/chatlog/')
    .then(response => response.json())
    .then(data => this.setState({ message: data }));
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
    const message= this.state.message.map(message => (
      <li key={message.id}>
        <p>{message.field}</p>
      </li>
    ))
    return(
      <>
      <div className="chat-log">
        <ul>{message}</ul>
        <section>
          <ChatSubmit/>
        </section>
        <button type="button" onClick={() => this.handleLogout()}>Logout</button>
        </div>
      </>
    )
  }
}

export default ChatWindow

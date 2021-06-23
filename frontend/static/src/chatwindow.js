import { Component } from 'react';
import ChatSubmit from './chatsubmit.js';
import Cookies from 'js-cookie';

class ChatWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: [],
    }

    this.inputMessage = this.inputMessage.bind(this);
  }
  componentDidMount(){
    fetch('/api/v1/chatlog/')
    .then(response => response.json())
    .then(data => this.setState({ message: data }));
  }


  inputMessage(message) {
    const options = {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(message),
    }
    fetch('/api/v1/chatlog/', options)
      .then(response => {

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => this.setState({message: [...this.state.message, data]}));
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
          <ChatSubmit inputMessage={this.inputMessage}/>
        </section>
        <button type="button" onClick={this.props.handleLogout}>Logout</button>
        </div>
      </>
    )
  }
}

export default ChatWindow

import { Component } from 'react';
import ChatSubmit from './chatsubmit.js';

class ChatWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: [],
    }
  }
  componentDidMount(){
    fetch('/api/v1/chatlog/')
    .then(response => response.json())
    .then(data => this.setState({ message: data }));
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
        </div>
      </>
    )
  }
}

export default ChatWindow

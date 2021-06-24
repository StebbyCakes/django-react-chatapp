import { Component } from 'react';
import ChatSubmit from './chatsubmit.js';
import Cookies from 'js-cookie';

class ChatWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: [],
      isEditing: null,
      edit: '',
    }

    this.inputMessage = this.inputMessage.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
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


    removeMessage(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }

    fetch(`/api/v1/chatlog/${id}/`, options)
      .then(response => {
        //logic to update state
        const message = [...this.state.message];
        const index = message.findIndex(message => message.id === id);
        message.splice(index, 1);
        this.setState({ message });
      })
      .catch((error) => {
        console.log.error('Error:', error);
      });
  }

editMessage(id) {
  const newMessage = {
    message: this.state.edit,
  }
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(newMessage),
  }

  fetch(`/api/v1/chatlog/${id}/`, options)
    .then(response => response.json())
}

  render() {
    // Cookies.remove('Authorization')
    const message= this.state.message.map(message => (
      <li key={message.id}>
        <p>{message.field}</p>
        {this.state.isEditing === message.id ? <button type="button" onClick={() => this.handleEdit(message.id)}>SAVE</button> : <button type="button" onClick={() => this.setState({ isEditing: message.id})}>EDIT</button>}
        <button type='button' onClick={() => this.removeMessage(message.id)}>Delete</button>
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

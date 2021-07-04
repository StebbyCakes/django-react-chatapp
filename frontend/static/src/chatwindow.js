import { Component } from 'react';
import ChatSubmit from './chatsubmit.js';
import Cookies from 'js-cookie';
import MessageDetail from './messageDetail.js'

class ChatWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
    }

    // this.inputMessage = this.inputMessage.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.retrieveMessages = setInterval(this.fetchData, 500)
  }

  componentWillUnmount() {
    clearInterval(this.retrieveMessages)
  }

  fetchData() {
    fetch('/api/v1/chatlog/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ messages: data }));
  }


  // inputMessage(message) {
  //   const options = {
  //     method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'X-CSRFToken': Cookies.get('csrftoken'),
  //     },
  //     body: JSON.stringify(message),
  //   }
  //   fetch('/api/v1/chatlog/', options)
  //     .then(response => {
  //
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //
  //       return response.json();
  //     })
  //     .then(data => this.setState({message: [...this.state.message, data]}));
  //   }


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
        const messages = [...this.state.messages];
        const index = messages.findIndex(message => message.id === id);
        messages.splice(index, 1);
        this.setState({ messages });
      })
      .catch((error) => {
        console.log.error('Error:', error);
      });
  }

editMessage(message) {
  const id = message.id;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(message),
  }

  fetch(`/api/v1/chatlog/${id}/`, options)
    .then(response => {

      if(!response.ok) {
        throw new Error('Network response was not ok');
      }
      const messages = [ ...this.state.messages];
      const index = messages.findIndex(message => message.id === id);
      messages[index] = message;
      this.setState({ messages });
    });
  }
// Cookies.remove('Authorization') // this needs to go inside of the render whenever heroku doesnt work
  render() {

    const chatDisplay = this.state.messages.map((message) => (
      <MessageDetail key={message.id} message={message} removeMessage={this.removeMessage} editMessage={this.editMessage}/>
    ))
    return(
      <>
      <div className="chat-log">
        <ul>{chatDisplay}</ul>
          <section>
          <ChatSubmit/>
          </section>

        </div>
      </>
    )
  }
}

export default ChatWindow;

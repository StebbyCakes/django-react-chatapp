import { Component } from 'react';
import Cookies from 'js-cookie';


  class ChatSubmit extends Component {
    constructor(props){
      super(props);
      this.state = {
        messages: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      const newSubmit = {
        message: this.state.messages,
      }
      const options = {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
          },
          body: JSON.stringify(newSubmit),
      }
      fetch('/api/v1/chatlog/', options)
        .then(response => response.json());

      this.setState({ messages: ''});
    }



      handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
      }

      render(){
        return(
        <form onSubmit={this.handleSubmit}>
          <textarea className="chat-submit" name="messages" value={this.state.messages} placeholder="Enter a message" onChange={this.handleInput}></textarea>
          <button className="button" type="submit">Send</button>
        </form>
      )}
  }
export default ChatSubmit

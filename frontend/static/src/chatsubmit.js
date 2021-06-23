import { Component } from 'react';
import Cookies from 'js-cookie';


  class ChatSubmit extends Component {
    constructor(props){
      super(props);
      this.state = {
        field: '',
      }
      this.inputMessage = this.inputMessage.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }
    inputMessage(event) {

      const message = {
        field: this.state.field,
      };
      const options = {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(message),
      }
      fetch('/api/v1/chatlog/', options)
        .then(response => response.json())
        .then(data => this.setState(data));
      }

      handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
      }

      render(){
        return(
        <form onSubmit={this.inputMessage}>
          <input onChange={this.handleInput} className="field" type="text" name="field" value={this.state.field} />
          <button className="button" type="submit">Send</button>
        </form>
      )}
  }
export default ChatSubmit

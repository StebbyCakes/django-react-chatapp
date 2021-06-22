import React from 'react';
import Cookies from 'js-cookie';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      text: '',
    }
    this.inputMessage = this.inputMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    fetch('/api/v1/chatlog/')
    .then(response => response.json())
    .then(data => this.setState({ message: data }));
  }
  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
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

  render() {
    const message= this.state.message.map(message => (
      <li key={message.id}>
        <p>{message.field}</p>
      </li>
    ))
    return(
      <>
      <div className="chat-log">
        <h1>Online Chat Log</h1>
        <section className="main">
        <form onSubmit={this.inputMessage}>
          <input onChange={this.handleInput} className="field" type="text" name="field" value={this.state.field} />
          <button className="button" type="submit">Send</button>
        </form>
        </section>
        <ul>{message}</ul>
        </div>
      </>
    )
  }
}


export default App;

import { Component } from 'react';
import Cookies from 'js-cookie';


  class ChatSubmit extends Component {
    constructor(props){
      super(props);
      this.state = {
        field: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      const message = {
        field: this.state.field,
      };
      this.props.inputMessage(message);

      this.setState({field: ''});
    }



      handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
      }

      render(){
        return(
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} className="field" type="text" name="field" value={this.state.field} />
          <button className="button" type="submit">Send</button>
        </form>
      )}
  }
export default ChatSubmit

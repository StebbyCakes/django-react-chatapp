import { Component } from 'react';
import Cookies from 'js-cookie';

class MessageDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      message: this.props.message.message,
    }
    this.editMessage = this.editMessage.bind(this);
    this.inputMessage = this.inputMessage.bind(this);
  }

editMessage() {
  this.setState({isEditing: false});
  const message = this.props.message;
  message.message = this.state.message;
  this.props.editMessage(message);

  }

  inputMessage(event){
    this.setState({ [event.target.name]: event.target.value });
  }




render() {
  const message = this.props.message;
  return(
    <li className='list'>
      {
          this.state.isEditing
          ? <input type="text" name="message" value={this.state.message}  onChange={this.inputMessage}></input>
          :  <p>{message.message}</p>
        }

        {
          this.state.isEditing
          ? <button className ="detail-button" type="button" onClick={this.editMessage}>SAVE</button>
          : message.has_owner_permissions && <button className ="detail-button" type="button" onClick={() => this.setState({ isEditing: true})}>EDIT</button>
      }
       {message.has_owner_permissions && <button className ="detail-button" type="button" onClick={() => this.props.removeMessage(message.id)}>DELETE</button>}
      </li>
    )
  }
}

export default MessageDetail;

import React, { Component } from 'react';
import axios from 'axios';

// TODO: rails server -p 5000
const SERVER_URL = "http://localhost:3000/secrets";

class SecretsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({content: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''});
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <textarea value={this.state.content} onChange={this._handleChange}/>
        <br/>
        <input type="submit" value="Tell"/>
      </form>
    );
  }
}

class SecretsGallery extends Component {
  render() {
    return (
      <h2>Actual secrets coming soon</h2>
    );
  }
}

class Secrets extends Component {
  saveSecret(content) {
    axios.post(SERVER_URL, { content: content }).then(function(result) {
      console.log(result);
    });
    // Save the secret to server using AJAX.
  }

  render() {
    return (
      <div>
        <h1>Tell Us All Your Secrets</h1>
        <SecretsForm onSubmit={this.saveSecret} />
        <SecretsGallery />
      </div>
    );
  }
}

export default Secrets;

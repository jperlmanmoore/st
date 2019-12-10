import React from 'react';
import emailjs from 'emailjs-com';

export default class ContactUs extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    feedback: '',
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      feedback: '',
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    const templateId = 'template_OoG9Ihf4';
    const {name, email, phone, feedback} = this.state

    let templateParams = {
      from_name: name,
      email: email,
      to_name: 'jperlmanmoore_gmail_com',
      phone: phone,
      message_html: feedback
    }
  
      emailjs.send('jperlmanmoore_gmail_com', templateId, templateParams, 'user_UqnZQoorvEdUtf7NT2dM1')
        .then((result) => {
          console.log('SUCCESS!', result.text);
        }, (err) => {
          console.log('FAILED...', err.text);
        });

    this.resetForm()
  };

    render() {
    return (
        
        <form className="webpage-mailing" onSubmit={this.handleSubmit}>
          <h1>Contact Us</h1>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange.bind(this, 'name')}
            name="name"
            placeholder="name (required)"
          />
          <input
            id="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this, 'email')}
            name="email"
            placeholder="email (required)"
          />
          <input
            id="phone"
            type="tel"
            value={this.state.phone}
            onChange={this.handleChange.bind(this, 'phone')}
            name="phone"
            placeholder="phone (required)"
          />
          <textarea
            id="message"
            type="text"
            onChange={this.handleChange.bind(this, 'feedback')}
            placeholder="Type your message here"
            required
            name="feedback"
            value={this.state.feedback}
            style={{ width: '50%', height: '150px' }}
          />
         <input type="submit" value="Send" />
      </form>
    )
  }
}
  
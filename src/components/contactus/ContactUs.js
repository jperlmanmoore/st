import React from 'react';
import emailjs from 'emailjs-com';

// export default function ContactUs() {

//     function sendEmail(e) {
//       e.preventDefault();

//       emailjs.sendForm('jperlmanmoore_gmail_com','template_OoG9Ihf4', e.target, 'user_UqnZQoorvEdUtf7NT2dM1')
//       .then((result) => {
//          console.log('SUCCESS!', result.text);
//       }, (err) => {
//          console.log('FAILED!', err.text);

//       });
//     }

//     return (
//       <form className="contact-form" onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" required  />
//         <label>Phone Number</label>
//         <input type="phone number" name="contact_number" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     );
//   }


export default class ContactUs extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    feedback: "",
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
    console.log(e.target.value)
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit');
    const templateId = 'template_OoG9Ihf4';
    const {name, email, phone, feedback} = this.state

    let templateParams = {
      from_name: name,
      email: email,
      to_name: 'jperlmanmoore@gmail.com',
      phone: phone,
      message_html: feedback

    }
    this.sendEmail(templateId, templateParams)
    this.resentForm()
  };

  resentForm() {
    this.setState({
      name: '',
      phone: '',
      email: '',
      feedback: '',
    })
  };

  sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm('jperlmanmoore_gmail_com', 'template_OoG9Ihf4', e.target, 'user_UqnZQoorvEdUtf7NT2dM1')
      .then((result) => {
        console.log('SUCCESS!', result.text);
      }, (err) => {
        console.log('FAILED...', err.text);
      })
    }

    render() {
    return (
        
        <form className="webpage-mailing" onSubmit={this.sendEmail}>
          <h1>Contact Us</h1>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            placeholder="name (required)"
          />
          <input
            id="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            placeholder="email (required)"
          />
          <textarea
            id="message"
            onChange={this.handleChange}
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
  

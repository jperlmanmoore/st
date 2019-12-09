import React from 'react';
import emailjs from 'emailjs-com'

export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('jperlmanmoore_gmail_com','template_OoG9Ihf4', e.target, 'user_UqnZQoorvEdUtf7NT2dM1')
      .then((result) => {
         console.log('SUCCESS!', result.text);
      }, (err) => {
         console.log('FAILED...', err.text);
    
      });
    }
  
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Phone Number</label>
        <input type="phone number" name="contact_number" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  }






// export default class extends React.Component {
//   constructor(props) {
// 	super(props);
// 	this.state = { feedback: '', name: '', email: '' };
// 	this.handleChange = this.handleChange.bind(this);
// 	this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
// 	return (
//   	<form className="webpage-mailing">
//     	<h1>Contact Us</h1>
//     	<div>  
//         <input
//             id="webpage"
//             value={this.state.name}
//             onChange={this.handleChange}
//             name="name"
//             placeholder="name (required)"
//         />
//         <input
//             value={this.state.email}
//             onChange={this.handleChange}
//             name="email"
//             placeholder="email (required)"
//         />
//         <textarea
//         	onChange={this.handleChange}
//         	placeholder="Post some lorem ipsum here"
//         	required
//         	value={this.state.feedback}
//         	style={{width: '100%', height: '150px'}}
//       	/>
//     	</div>
//     	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
//   	</form>
// 	)
//   }

//   handleChange(event) {
//     this.setState({feedback: event.target.value})
//   }

//   handleSubmit (event) {
//     const templateId = 'template_OoG9Ihf4';
// 	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
//   }

//   sendFeedback (templateId) {
//     const templateParams = {
//         name: 'James',
//         notes: 'Check this out!'
//     };
    


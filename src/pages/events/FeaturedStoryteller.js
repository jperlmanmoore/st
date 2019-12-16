import React from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FeaturedStoryteller extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    feedback: '',
    application: '',
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
    // const { name, email, phone, feedback, doc } = this.state

    // let templateParams = {
    //   from_name: name,
    //   email: email,
    //   to_name: 'jperlmanmoore_gmail_com',
    //   phone: phone,
    //   message_html: feedback,
    //   application: doc,
    // }

    emailjs.sendForm('jperlmanmoore_gmail_com', templateId, e.target, 'user_UqnZQoorvEdUtf7NT2dM1')
      .then((result) => {
        console.log('SUCCESS!', result.text);
      }, (err) => {
        console.log('FAILED...', err.text);
      });

    this.resetForm()
  };

  render() {
    return (
      <div style={{ marginTop: 150, height: 700, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Form autoComplete style={{ width: 750 }} className="mx-5" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
              name="name"
              placeholder="name (required)" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePhone">Phone</Label>
            <Input id="phone"
              pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
              type="tel"
              value={this.state.phone}
              onChange={this.handleChange.bind(this, 'phone')}
              name="phone"
              placeholder="phone (123) 456-7890 (required)" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Email</Label>
            <Input id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this, 'email')}
              name="email"
              placeholder="email (required)" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input id="message"
              type="text" 
              onChange={this.handleChange.bind(this, 'feedback')}
              placeholder="Type your message here"
              required
              name="feedback"
              value={this.state.feedback}
              style={{ width: '100%', height: '150px' }} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" onChange={this.handleChange.bind(this, 'doc')} />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
        </FormText>
          </FormGroup>
          <Button type="submit" value="Send">Submit</Button>
        </Form>
      </div>
    )
  }
}
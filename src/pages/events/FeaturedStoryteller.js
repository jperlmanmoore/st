import React from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FeaturedStoryteller extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    feedback: '',
    submission: '',
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
      submission: '',
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    const templateId = 'template_OoG9Ihf4';

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
            <Label for="exampleText">Tell us about yourself</Label>
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
          <Label for="exampleText">Submission</Label>
            <Input id="submission"
              type="text" 
              onChange={this.handleChange.bind(this, 'fsubmission')}
              placeholder="link to your submission"
              required
              name="submission"
              value={this.state.submission}
             />
          </FormGroup>
          <Button type="submit" value="Send">Submit</Button>
        </Form>
      </div>
    )
  }
}
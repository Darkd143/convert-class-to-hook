import React, {useState} from 'react';
import {
  Form, FormGroup, Input,
  Label, Col, Button,
} from 'reactstrap'

const FunctionBasedForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }
  return (
    <Form onSubmit={ handleSubmit }>
      <h1>Function Based Form</h1>
      <FormGroup row>
        <Label for="exampleEmail" sm={ 2 }>Email</Label>
        <Col sm={ 8 }>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email"
            value={ email }
            onChange={ event => setEmail(event.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={ 2 }>Password</Label>
        <Col sm={ 8 }>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password"
            value={ password }
            onChange= {event => setPassword(event.target.value) }
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={ { size: 'auto', offset: 8 } }>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  )
};

export default FunctionBasedForm;
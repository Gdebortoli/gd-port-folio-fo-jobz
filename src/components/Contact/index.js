import React, { useState } from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

function Contact() {
        // Create a new instance of Contact 
        const [formState, setFormState] = useState({
            name: '',
            email: '',
            message: '',
        });
        // Error handling
        const [errorMessage, setErrorMessage] = useState('');
        const { name, email, message } = formState;
        // Handle errors and set error message
        const handleSubmit = (e) => {
            e.preventDefault();
            if (!errorMessage) {
                console.log('Submit Form', formState);
            }
        };
        // Validate Email
        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
        // Handle errors if email/values are incorrect or empty
        const handleChange = (e) => {
            if (e.target.name === 'email') {
                const isValid = validateEmail(e.target.value);
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                } else {
                    setErrorMessage('');
                }
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
                console.log('Handle Form', formState);
            }
        };

        return (
            <section>
                <Form onSubmit={handleSubmit}>
                    {/* Name */}
                    <FormGroup onSubmit={handleSubmit}>
                        <Label for="Name">
                            Name:
                        </Label>
                        <Input
                            type="text"
                            name="name"
                            defaultValue={name}
                            onBlur={handleChange}
                        />
                    </FormGroup>
                    {/* Email Address */}
                    <FormGroup onSubmit={handleSubmit}>
                        <Label for="Email">
                            Email:
                        </Label>
                        <Input
                            type="email"
                            name="email"
                            defaultValue={email}
                            onBlur={handleChange}
                        />
                    </FormGroup>
                    {/* Phone # */}
                    <FormGroup>
                        <Label for="Number">
                            Phone Number:
                        </Label>
                        <Input
                            id="Number"
                            name="number"
                            placeholder="Enter your phone number"
                            type="number"
                        />
                    </FormGroup>
                    {/* Text entry Area */}
                    <FormGroup>
                        <Label for="Message">
                            Message:
                        </Label>
                        <Input
                            name="message"
                            rows="5"
                            defaultValue={message}
                            onBlur={handleChange}
                        />
                    </FormGroup>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </Form>
                <Button type="submit">Submit</Button>
            </section>
        );
    }


export default Contact; 
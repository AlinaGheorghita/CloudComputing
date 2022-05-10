import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';

import axios from 'axios';

const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    preferences: [],
    formSubmitted: false,
    success: false
}

const inputFieldValues = [
    {
        name: "firstName",
        label: "Nume",
        id: "first-name",
    },
    {
        name: "lastName",
        label: "Prenume",
        id: "last-name"
    },
    {
        name: "email",
        label: "Email",
        id: "my-email",
    },
];

let preferences = [];

const ContactForm = () => {
    // We'll update "values" as the form updates
    const [values, setValues] = useState(initialFormValues);
    // "errors" is used to check the form for errors
    const [errors, setErrors] = useState({});

    const handleInputValue = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
        validate({ [name]: value });
    };

    const validate = (newValues) => {
        const fieldValues = newValues || values;
        let temp = { ...errors }

        if ("firstName" in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."

        if ("lastName" in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."

        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required."
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                    ? ""
                    : "Email is not valid."
        }

        if ("message" in fieldValues)
            temp.message =
                fieldValues.message ? "" : "This field is required."

        setErrors({
            ...temp
        });
    }

    const handleSubmit = async () => {
        setValues(initialFormValues);

        await axios.post(`${process.env.REACT_APP_API_URL}/movies/foreign`, {
            senderName: `${values.lastName} ${values.firstName}`,
            senderMail: `${values.email}`,
            messageContent: `${values.message}`
        }
        );
    };

    return (
        <div>
            <div>
                <div>
                    <div style={{ margin: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {inputFieldValues.map((inputFieldValue, index) => {
                            return (
                                <div key={index}>
                                    <TextField
                                        style={{ margin: '50px' }}
                                        variant="standard"
                                        key={index}
                                        onBlur={handleInputValue}
                                        onChange={handleInputValue}
                                        name={inputFieldValue.name}
                                        label={inputFieldValue.label}
                                        rows={1}
                                        autoComplete="none"
                                        {...(errors[inputFieldValue.name] && { error: true, helperText: errors[inputFieldValue.name] })}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        <TextField
                            style={{ width: '400px' }}
                            placeholder='Scrie un mesaj...'
                            variant="standard"
                            onBlur={handleInputValue}
                            onChange={handleInputValue}
                            name={'message'}
                            label={'Mesaj'}
                            rows={3}
                            multiline={true}
                            autoComplete="none"
                            {...(errors['message'] && { error: true, helperText: errors['message'] })}
                        />
                    </div>
                </div>
            </div>
            <div>
                <Button
                    disabled={!values.firstName || !values.email || !values.lastName || !values.message}
                    style={{ margin: '50px' }}
                    variant="contained"
                    onClick={() => handleSubmit()}
                >
                    SEND MESSAGE
                </Button>
            </div>
        </div >
    )
}

export default ContactForm;
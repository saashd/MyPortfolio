import {useForm} from 'react-hook-form';
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import emailjs from '@emailjs/browser';
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";


const ContactForm = () => {
    const [open, setOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const onSubmit = async (data) => {
        const {name, email, subject, message} = data;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            reset();
             setOpen(true);
        } catch (e) {
            console.log(e);
        }
    };




    return (
        <Paper className="contact" align="center"
               occupation={3}
               style={{background: "rgba(255,255,255,0.55)"}}
        >
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div style={{display: "grid",gridGap: "10px"}}>
                <TextField
                    type='text'
                    name='name'
                    {...register('name', {
                        required: {value: true, message: 'Please enter your name'},
                        maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                        }
                    })}
                    placeholder='Name'
                />
                {errors.name && <span>{errors.name.message}</span>}

                <TextField
                    type='email'
                    name='email'
                    {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                    placeholder='Email address'
                />
                {errors.email && (
                    <span>Please enter a valid email address</span>
                )}
                <TextField
                    type='text'
                    name='subject'
                    {...register('subject', {
                        required: {value: true, message: 'Please enter a subject'},
                        maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                        }
                    })}
                    placeholder='Subject'
                />
                {errors.subject && (
                    <span>{errors.subject.message}</span>
                )}
                <TextField
                    multiline
                    rows={3}
                    name='message'
                    {...register('message', {
                        required: true
                    })}
                    placeholder='Message'
                />
                {errors.message && <span>Please enter a message</span>}
                </div>
                <Button variant="outlined" type='submit' style={{margin: "10px"}}>
                    Submit
                </Button>
            </form>
            <Snackbar open={open} autoHideDuration={6000} >
                <Alert  severity="success" sx={{width: '100%'}}>
                    Message sent successfully!
                </Alert>
            </Snackbar>
        </Paper>

    );
};

export default ContactForm;
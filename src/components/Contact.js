import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Recaptcha from "react-google-recaptcha"
import emailjs from '@emailjs/browser';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function ContactForm() {

    const [state, setState] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [captchaValue, setCaptchaValue] = useState(null);
    const [open, setOpen] = React.useState(false);

    const resetForm = () => {
        setState({
            name: "",
            subject: "",
            email: "",
            message: ""
        })
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    };

    const onChange = (captchaValue) => {
        setCaptchaValue(captchaValue);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (captchaValue) {
            const templateParams = {...state, 'g-recaptcha-response': captchaValue};
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            ).then(r => {
                if (r.status === 200) {
                    setOpen(true)
                    resetForm();
                }
            }).catch(e => {
                console.log(e)
            })
        }

    };

    return (
        <Paper className="contact" align="center"
               occupation={3}
               style={{background: "rgba(255,255,255,0.55)"}}
        >
            <form onSubmit={handleSubmit}>
                <div style={{display: "grid", gridGap: "10px"}}>
                    <TextField
                        required
                        name="name"
                        type="text"
                        placeholder="Your first and last name"
                        value={state.name}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name="email"
                        type="email"
                        placeholder="email@gmail.com"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name="subject"
                        type="text"
                        placeholder="What is the subject?"
                        value={state.subject}
                        onChange={handleChange}
                    />

                    <TextField
                        required
                        multiline
                        rows={3}
                        name="message"
                        placeholder="Tell me more about..."
                        value={state.message}
                        onChange={handleChange}
                    />
                </div>
                <div style={{margin:"10px"}}>
                    <Recaptcha
                        size="small"
                        className="captcha"
                        sitekey={process.env.REACT_APP_SITE_KEY}
                        render="explicit"
                        onChange={onChange}
                    />
                    <Button variant="outlined" type="submit">Send</Button>
                </div>

            </form>
            <Snackbar open={open} autoHideDuration={6000}>
                <Alert severity="success" sx={{width: '100%'}}>
                    Your message has been sent successfully. I will contact you soon.
                </Alert>
            </Snackbar>
        </Paper>
    );
}

export default ContactForm;
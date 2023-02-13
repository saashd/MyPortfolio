import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Recaptcha from "react-google-recaptcha"
import emailjs from '@emailjs/browser';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import {device} from "../utils/responsive";
import {colors} from "../utils/colors";


const TextWrapper = styled(TextField)`
  width: 25vw;
  @media only screen and ${device.mobile} {
    width: 60vw;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.mainColor} !important;
  }

  .MuiFilledInput-root {
    border-bottom: 0.1em solid ${colors.mainColor} !important;
  }

  .MuiInput-root {
    border-bottom: 0.1em solid ${colors.mainColor} !important;
  }
`

const ActionsWrapper = styled.div`
  padding: 3vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`


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
        <div>
            <h3>CONTACT ME <br/>
                &mdash;&#9733;&mdash;
            </h3>
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                     alignItems="center"

                    >
                    <Grid item>
                        <TextWrapper
                            required
                            name="name"
                            type="text"
                            placeholder="Your first and last name"
                            value={state.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextWrapper
                            required
                            name="email"
                            type="email"
                            placeholder="email@gmail.com"
                            value={state.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextWrapper
                            required
                            name="subject"
                            type="text"
                            placeholder="What is the subject?"
                            value={state.subject}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextWrapper
                            required
                            multiline
                            rows={3}
                            name="message"
                            placeholder="Tell me more about..."
                            value={state.message}
                            onChange={handleChange}
                        />
                    </Grid>

                </Grid>
                <ActionsWrapper>
                    <Recaptcha
                        className={"captcha"}
                        sitekey={process.env.REACT_APP_SITE_KEY}
                        render="explicit"
                        onChange={onChange}
                    />
                    <button className="sendBtn" type="submit">Send</button>
                </ActionsWrapper>

            </form>
            <Snackbar open={open} onClose={() => setOpen(false)} autoHideDuration={3000}>
                <Alert severity="success" sx={{width: '100%'}}>
                    Your message has been sent successfully. I will contact you soon.
                </Alert>
            </Snackbar>
        </div>
    );
}

export default ContactForm;
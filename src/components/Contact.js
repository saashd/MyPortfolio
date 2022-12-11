import React, {useState} from "react";
import "./style.css"
import Paper from "@mui/material/Paper";


const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const {name, email, message} = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <Paper className="contact"  align="center"
               occupation={3}
               style={{background:"#ffffff1a",color:"white"}} >
            <h2>For any question contact me on: </h2>
            <h3>alexdruzina[at]gmail[dot]com</h3>
        </Paper>




        // <form onSubmit={handleSubmit}>
        //     <Paper className="contact"
        //
        //         elevation={3}
        //         >
        //         <TextField fullWidth
        //                    label="Name"
        //                    id="name"
        //                    type="text"
        //                    required/>
        //         <TextField
        //             fullWidth
        //             label="Email"
        //             id="email"
        //             type="email"
        //             required/>
        //         <TextField
        //                    fullWidth
        //                    label="Message"
        //                    id="message"
        //                    multiline
        //                    minRows={4}
        //                    required/>
        //
        //         <Button
        //             size="small"
        //             variant="outlined"
        //             type="submit"
        //             style={{padding: "1%", marginTop: "2%", marginLeft: "43%", alignText: "center"}}
        //         >
        //             {status}
        //         </Button>
        //     </Paper>
        // </form>
    );
};

export default ContactForm;
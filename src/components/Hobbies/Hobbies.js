import * as React from 'react';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import {images} from "./images/images";



const Item = styled(Paper)
` background-color: #FFFFFF82;
  padding: 0.1em;
  text-align: center;
`



export default function Hobbies() {
    return (
        <>
            <p style={{textAlign: "justify"}}>In my free time, I love to explore my creative side through various arts
                and crafts.<br/>
                From candle making to sculpting with clay, I find joy in the process of turning raw materials into
                unique and beautiful
                pieces. I also love to bake and decorate cookies and take care of my houseplants.<br/>
                These hobbies not only allow me to express my artistic flair but also bring me peace and a sense of
                accomplishment. Each creation is a reflection of my passion and imagination.</p>

            <Box sx={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Masonry columns={{xs: 1, sm: 2, md: 3}} spacing={3}>
                    {images.map((item, index) => (
                        <Item key={index} sx={{width: item.width, height: "auto", display: "flex"}}>
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    display: 'block',
                                    width: "100%",
                                }}
                            />
                        </Item>
                    ))}
                </Masonry>
            </Box>
        </>
    );
}
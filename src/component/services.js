import { Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../img1.jpg"
import image1 from "../img2.jpg"
import image2 from "../img3.jpg"


function Service(){
    const navigate = useNavigate()
    return (
        <Grid >
            <Grid>
                <Typography variant="h3" className="fw-bold text-info mt-5">Services</Typography>
            </Grid>
            <Grid className="d-flex justify-content-evenly mt-5 parentDiv">
                <Grid className="box"><img width={"50%"} src={image}/>
                <Typography variant="h4" className="fw-bold text-info">Communications Skills</Typography>
                <Typography variant="h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Typography>
                <button className="btn btn-info mt-5 px-4 p-2 text-white fw-bold">More</button>
                                
                
                
                </Grid>
                <Grid className="box"><img width={"50%"} src={image1}/>
                <Typography variant="h4" className="fw-bold text-info">Inspired Design</Typography>
                <Typography variant="h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Typography>
                <button className="btn btn-info mt-5 px-4 p-2 text-white fw-bold">More</button></Grid>
                <Grid className="box"><img width={"50%"} src={image2}/>
                <Typography variant="h4" className="fw-bold text-info">Happy Customer</Typography>
                <Typography variant="h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Typography>
                <button className="btn btn-info mt-5 px-4 p-2 text-white fw-bold">More</button></Grid>
                
            </Grid>
            <button className="btn btn-secondary mt-5 fs-4 px-5 " onClick={()=>navigate('/')}>Continue</button>
        </Grid>
    )
}


export default Service;
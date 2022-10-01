import React,{ useState, useContext } from 'react'
import '../../Forms.css'

//Matrial UI
import { Grid, Button } from '@mui/material'

//Custom Components
import TextInput from '../../../components/textInput/TextInput'
import UserContext from '../../../UserContext'

function Form1() {
    const {user, setUser} = useContext(UserContext);

    //States
    const [name, setName] = useState()
    const [phoneNo, setPhoneNo] = useState()
    const [email, setEmail] = useState()

    //Set error in empty fields
    const setError = () => {
        if(!name) setName("");
        if(!phoneNo) setPhoneNo("");
        if(!email) setEmail("");
    }

    //handle next button
    const handleNextButton = () => {

    }

    



    return (
        <div className="form-wrapper">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextInput label="Name" value={name} setValue={setName} />                
                </Grid>
                <Grid item xs={12}>
                    <TextInput label="Phone Number" value={phoneNo} setValue={setPhoneNo} />                
                </Grid>
                <Grid item xs={12}>
                    <TextInput label="Email" value={email} setValue={setEmail} />                
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth>Next</Button>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Form1
import React,{ useState } from 'react'
import '../Forms.css'

//Matrial UI
import { Grid } from '@mui/material'

//Custom Components
import TextInput from '../../../components/textInput/TextInput'

function Form1() {
    //States
    const [name, setName] = useState()
    const [phoneNo, setPhoneNo] = useState()
    const [email, setEmail] = useState()


    return (
        <div className="form-wrapper section-margin">
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
                
            </Grid>
        </div>
    )
}

export default Form1
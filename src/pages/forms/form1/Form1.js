import React,{ useState, useContext, useEffect } from 'react'
import '../../Forms.css'
import { useNavigate } from 'react-router-dom'


//Matrial UI
import { Grid, Button } from '@mui/material'

//Custom Components
import TextInput from '../../../components/textInput/TextInput'
import UserContext from '../../../UserContext'

function Form1() {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

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

    //To set current values in field
    const setValues = (details) => {
        if(!details) return;
        setName(details.name);
        setPhoneNo(details.phoneNo);
        setEmail(details.email);
    }
    useEffect(() => {
        setValues(user);
    }, [])
    



    //handle next button
    const handleNextButton = () => {
        if(!name || !phoneNo || !email) {
            setError();
            return;
        }else{
            setUser({...user, name, phoneNo, email});
            navigate('/form/next');
        }
    }

    



    return (
        <div className="form-wrapper">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextInput label="Name" value={name} setValue={setName} />                
                </Grid>
                <Grid item xs={12}>
                    <TextInput label="Phone Number" type='Number' value={phoneNo} setValue={setPhoneNo} />                
                </Grid>
                <Grid item xs={12}>
                    <TextInput label="Email" type='Email' value={email} setValue={setEmail} />                
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleNextButton}>Next</Button>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Form1
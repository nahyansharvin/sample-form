import React, { useState, useContext, useEffect } from 'react'
import '../../Forms.css'
import { useNavigate } from 'react-router-dom'



//Matrial UI
import { Grid, Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//Custom Components
import TextInput from '../../../components/textInput/TextInput'
import UserContext from '../../../UserContext';

function Form2() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  //States
  const [location, setLocation] = useState()
  const [age, setAge] = useState()
  const [university, setUniversity] = useState()

  //Set error in empty fields
  const setError = () => {
    if (!location) setLocation("");
    if (!age) setAge("");
    if (!university) setUniversity("");
  }

  //To set current values in field
  const setValues = (details) => {
    if (!details) return;
    setLocation(details.location);
    setAge(details.age);
    setUniversity(details.university);
  }
  useEffect(() => {
    setValues(user);
  }, [])

  //handle Submit button
  const handleSubmitButton = () => {
    if (!location || !age || !university) {
      setError();
      return;
    } else {
      setUser({ ...user, location, age, university });
      navigate('/success');
    }
  }

  return (
    <div className="form-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="text" startIcon={<ArrowBackIosIcon />} size="small" sx={{ color: "#2b2b2b", fontWeight: "bold" }} onClick={()=>navigate("/form/")} >Back</Button>
        </Grid>
        <Grid item xs={12}>
          <TextInput label="Location" value={location} setValue={setLocation} />
        </Grid>
        <Grid item xs={12}>
          <TextInput label="Age" type='Number' value={age} setValue={setAge} />
        </Grid>
        <Grid item xs={12}>
          <TextInput label="University" value={university} setValue={setUniversity} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmitButton}>Submit</Button>
        </Grid>

      </Grid>
    </div>
  )
}

export default Form2
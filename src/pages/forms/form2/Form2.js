import React,{ useState } from 'react'

//Matrial UI
import { Grid } from '@mui/material'

//Custom Components
import TextInput from '../../../components/textInput/TextInput'

function Form2() {
  //States
  const [location, setLocation] = useState()
  const [age, setAge] = useState()
  const [university, setUniversity] = useState()


  return (
    <div className="form-wrapper section-margin">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextInput label="Location" value={location} setValue={setLocation} />
        </Grid>
        <Grid item xs={12}>
          <TextInput label="Age" value={age} setValue={setAge} />
        </Grid>
        <Grid item xs={12}>
          <TextInput label="University" value={university} setValue={setUniversity} />
        </Grid>

      </Grid>
    </div>
  )
}

export default Form2
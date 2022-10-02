import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

//Form validators
import { useFormik } from 'formik';
import * as yup from 'yup';

//Matrial UI
import { Grid, Button, TextField } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//Custom Components
import UserContext from '../../../UserContext';

const validationSchema = yup.object({
  location: yup
    .string()
    .required('Location is required')
    .matches(/^[aA-zZ\s]+$/, "Location must not contain numbers or special characters"),
  age: yup
    .number()
    .required('Age is required')
    .typeError('Age must be a number')
    .min(1, 'Age must be greater than 0')
    .max(100, 'Enter a valid age'),
  university: yup
    .string()
    .required('University is required')
    .matches(/^[aA-zZ\s]+$/, "University must not contain numbers or special characters"),
});

function Form2() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: user,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUser({ ...user, location: values.location, age: values.age, university: values.university });
      navigate('/success');
    },
  });


  return (
    <div className="form-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="text" startIcon={<ArrowBackIosIcon />} size="small" sx={{ color: "#2b2b2b", fontWeight: "bold" }} onClick={() => navigate("/sample-form/")} >Back</Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            id="location"
            name="location"
            label="Location"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            type="number"
            id="age"
            name="age"
            label="Age"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            id="university"
            name="university"
            label="University"
            value={formik.values.university}
            onChange={formik.handleChange}
            error={formik.touched.university && Boolean(formik.errors.university)}
            helperText={formik.touched.university && formik.errors.university}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={formik.handleSubmit}>Submit</Button>
        </Grid>

      </Grid>
    </div>
  )
}

export default Form2
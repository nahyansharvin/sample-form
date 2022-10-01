import React, { useContext, useEffect } from 'react'
import '../../Forms.css'
import { useNavigate } from 'react-router-dom'

//Form validators
import { useFormik } from 'formik';
import * as yup from 'yup';


//Matrial UI
import { Grid, Button, TextField } from '@mui/material'

//Custom Components
import UserContext from '../../../UserContext'

const validationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required'),
    phoneNo: yup
        .string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Phone number must contain 10 digits')
        .max(10, 'Phone number must be exactly 10 digits'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
});

function Form1() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNo: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            setUser({ ...user, name: values.name, phoneNo: values.phoneNo, email: values.email });
            
            console.log(user);
            navigate('/form/next');
        },
    });

   
    //To set current values in field
    const setValues = (details) => {
        if (!details) return;
        // setName(details.name);
        // setPhoneNo(details.phoneNo);
        // setEmail(details.email);
    }
    useEffect(() => {
        setValues(user);
    }, [])




    //handle next button
    // const handleNextButton = () => {
    //     if(!name || !phoneNo || !email) {
    //         setError();
    //         return;
    //     }else{
    //         setUser({...user, name, phoneNo, email});
    //         navigate('/form/next');
    //     }
    // }





    return (
        <div className="form-wrapper">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        required
                        id="name"
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        required
                        type="Number"
                        id="phoneNo"
                        name="phoneNo"
                        label="Phone Number"
                        value={formik.values.phoneNo}
                        onChange={formik.handleChange}
                        error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                        helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        required
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth onClick={formik.handleSubmit}>Next</Button>
                </Grid>

            </Grid>
        </div>
    )
}

export default Form1
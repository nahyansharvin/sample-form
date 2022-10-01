import React from 'react'
import './FormLayout.css'

import { Outlet } from 'react-router-dom'

function FormLayout() {
    return (
        <>
            <div className="form-layout">
                <div className="form-layout-title">
                    <h2>Please Enter Your Details Below</h2>
                </div>
                <div className="form-container">
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default FormLayout
import React from 'react'
import Form from 'react-bootstrap/Form';
import './Login.module.css'

import { Button } from 'react-bootstrap';

function Login() {
    return (
        <>
            <div className='container-login'>
                <Form.Control size="s" type="text" placeholder="Large text" />
                <br />
                <Form.Control type="text" placeholder="Normal text" />
                <br />
                <Button variant="primary">Sign In</Button>

            </div>
        </>
    )
}

export default Login
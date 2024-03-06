import React from 'react';
import Form from './Form';

function Login() {
    return <Form route="/api/token/" method="login" />
}

export default Login;

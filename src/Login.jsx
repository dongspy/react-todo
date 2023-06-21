import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const LOGIN_QUERY = gql`
    query LoginQuery($credentials: Credentials!) {
        login(credentials: $credentials) {
            accessToken
        }
    }
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [login, { loading, error }] = useLazyQuery(LOGIN_QUERY, {
        onCompleted: (data) => {
            if (data && data.login && data.login.accessToken) {
                localStorage.setItem('auth-token', data.login.accessToken);
                navigate('/todos');
                // console.log(localStorage.getItem('auth-token'));
            }
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        login({ variables: { credentials: { email, password } } });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email00"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from '../../api.jsx';
import { Link, useNavigate } from "react-router-dom";
import {StyledButton, StyledForm} from "../../styles.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.user.id);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/blog');
        },
        onError: (error) => {
            setErrorMessage(error.message);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ email, password });
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <h1>Login</h1>
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" required />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required />
            <StyledButton type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? "Logging in..." : "Login"}
            </StyledButton>
            <p>No Account yet? Go to <Link to="/register">Registration</Link></p>
            <Link to="/blog">
                <StyledButton>Back</StyledButton>
            </Link>
        </StyledForm>
    );
};

export default Login;

import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // useNavigate hook return a function that lets to navigate progrmatically; in this case is to run login function (refer line 18)
    const authContext = useContext(AuthContext);

    function login() {
        const isCorrectUsername = username === "haris@sigmaschool.co"
        const isCorrectPassword = password === "password";
        if (isCorrectUsername && isCorrectPassword) {
            authContext.setToken("1234");
            navigate("/dashboard");
        }
    }

    return (
        <Container>
            <h1>Login to your account</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Never share your password with others!
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" onClick={login}>Login</Button>
                {/* add remember me tickbox; refer to completed todolist tickbox */}
            </Form>
        </Container>
    );
}
import { useState } from 'react';


const UserLogin = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await fetch('http://localhost:3001/users/login', {


                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: user.username,
                    password: user.password,
                }),
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            alert('Login successful');
            // Redirect to the dashboard or home page
        } catch (error) {
            console.error('Error logging in:', error.message);
            alert('Login failed');
        }
    };

    const handleCancel = () => {
        setUser({
            username: '',
            password: '',
        });
    };

    return (
        <div className="form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={user.username}
                    onChange={handleChange}
                />
                <label htmlFor="username">Username</label>

                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={user.password}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>

                <button type="submit">Login</button>
                <button type="button" className="cancel" onClick={handleCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default UserLogin;

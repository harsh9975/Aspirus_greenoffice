import React, {useRef, useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history  = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }catch{
            setError('Failed to sign in')
        }
        setLoading(false)
    }
    return (
        <div>
            <h2>Log In</h2>
           
            {error && <h4>{error}</h4>}
            <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" ref={emailRef} required />
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
            <button disabled={loading} type="submit">Login</button>
            </form>
            <h4>Need an Account? <Link to="/signup">SignUp</Link></h4>
        </div>
    )
}

export default Login

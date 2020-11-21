import React, {useRef, useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function Adminlogin() {
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
        <div className="container">
            <h2>Admin Log In</h2>
           
            {error && <h4 className="alert alert-danger">{error}</h4>}
            <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="email" ref={emailRef} required />
            </div>
            
            <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" ref={passwordRef} required />
            </div>
            
            <button disabled={loading} className="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Adminlogin

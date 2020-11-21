import React, {useRef, useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history  = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value, passwordConfirmRef.current.value)
            history.push("/")
        }catch{
            setError('Failed to create error')
        }
        setLoading(false)
    }
    return (
        <div className="sign_main container" >
            <h2>Sign Up</h2>
           
            {error && <h4>{error}</h4>}
            <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="email" ref={emailRef} required />
            </div>
            
            <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" ref={passwordRef} required />
            </div>

            <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" ref={passwordConfirmRef} required />
            </div>
            
            <button disabled={loading} className="btn btn-primary" type="submit">Sign Up</button>
            
            </form>
            <h4>Have an Account? <Link to="/login">Log In</Link></h4>
        </div>

    )
}

export default Signup

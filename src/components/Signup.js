import React, {useRef, useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history  = useHistorytory()


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
        <div>
            <h2>Sign Up</h2>
           
            {error && <h4>{error}</h4>}
            <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" ref={emailRef} required />
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
            <label>Confirm Password</label>
            <input type="password" ref={passwordConfirmRef} required />
            <button disabled={loading} type="submit">Sign Up</button>
            </form>
            <h4>Have an Account? <Link to="/login">Log In</Link></h4>
        </div>

    )
}

export default Signup

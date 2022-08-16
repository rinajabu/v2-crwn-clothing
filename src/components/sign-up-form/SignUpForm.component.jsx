import React, { useState, useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import Button from '../button/Button.component'
import FormInput from '../form-input/FormInput.component'
import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match!");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user)
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            alert('New account creation success! Enjoy shopping!')
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use.');
            } else {
                console.error('user creation encountered an error', error);
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with you email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    label="Display Name"
                    type="text" 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName} 
                    required 
                />

                <FormInput 
                    label="Email"
                    type="email" 
                    onChange={handleChange} 
                    name='email' 
                    value={email} 
                    required 
                />

                <FormInput 
                    label="Password"
                    type="password" 
                    onChange={handleChange} 
                    name='password' 
                    value={password} 
                    required 
                />

                <FormInput 
                    label="Confirm Password"
                    type="password" 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    required 
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm
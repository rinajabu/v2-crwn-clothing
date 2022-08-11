import React, { useState } from 'react'
import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth, 
    signInAuthUserWithEmailAndPassword, 
    signInWithGooglePopup 
} from '../../utils/firebase/firebase.utils'
import Button from '../button/Button.component'
import FormInput from '../form-input/FormInput.component'
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const signInWithGoogle = async () => {
        // const response = await signInWithGooglePopup()
        // can destructure user from 'response' object
        const { user } = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("Email and password does not match. Please check your inputs and try again.");
                    break;
                case 'auth/user-not-found':
                    alert("No user");
                    break;
                default:
                    console.error(error);
                    break;
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign up with you email and password</span>
            <form onSubmit={handleSubmit}>

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

                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm
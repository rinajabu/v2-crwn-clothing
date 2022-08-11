import React from 'react'
import SignInForm from '../../components/sign-in-form/SignInForm.component'
import SignUpForm from '../../components/sign-up-form/SignUpForm.component'
import './authentication.styles.scss'
// import { getRedirectResult } from 'firebase/auth'

const Authentication = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth)
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }, [])

    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
        
    )
}

export default Authentication
import React from 'react'
import SignUpForm from '../../components/sign-up-form/SignUpForm.component'
// import { getRedirectResult } from 'firebase/auth'
import { 
    // auth,
    signInWithGooglePopup, 
    // signInWithGoogleRedirect, 
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        // const response = await signInWithGooglePopup()
        // can destructure user from 'response' object
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth)
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }, [])

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
            <SignUpForm />
        </div>
        
    )
}

export default SignIn
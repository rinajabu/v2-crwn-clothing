import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import './navigation.styles.scss'

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext)

    const handleSignOut = async () => {
        try {
            await signOutUser()
            setCurrentUser(null)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    { currentUser ?
                        <span className='nav-link' onClick={handleSignOut}>SIGN OUT</span>
                        : <Link className='nav-link' to='/auth'>SIGN IN</Link>
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';
import { MyContext } from '../../App';

function ForgotPassword(props) {

    const context = useContext(MyContext);


     useEffect(() => {
            context.setIsHideSidebarandHeader(true)
        }, [])
    return (
        <section id='forgotpassword'>
            <img className='pattern-img' src='/assets/images/login_background.webp' />
            <div className='loginBox'>
                <Link to={'/'} className='auth-img-login'>
                    <img src={'/assets/images/logo.webp'} />
                </Link>
                <h4 className='login-title'>Reset the password</h4>
                <form className='login-wrapper'>
                    <div className='input-groups' >
                        <EmailIcon />
                        <input type='email' placeholder='enter your email' />
                    </div>
                   
                    <Button className='btn-blue passwordButton'>get link</Button>
                    
                   
                </form>

                <div className='form-auth-navigation'>
                    <span>remember the password?</span>
                    <Link className='link-nave' to={'/login'}>Login</Link>
                </div>
            </div>
        </section>
    );
}

export default ForgotPassword;
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";


function Login(props) {

    const context = useContext(MyContext);

    const [passwordVisible, setPasswordVisible] = useState(false)

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    useEffect(() => {
        context.setIsHideSidebarandHeader(true)
    }, [])

    return (
        <section id='login'>
            <img className='pattern-img' src='/assets/images/login_background.webp' />
            <div className='loginBox'>
                <Link to={'/'} className='auth-img-login'>
                    <img src={'/assets/images/logo.webp'} />
                </Link>
                <h4 className='login-title'>Login to Hotash</h4>
                <form className='login-wrapper'>
                    <div className='input-groups' >
                        <EmailIcon />
                        <input type='email' placeholder='enter your email' />
                    </div>
                    <div className='input-groups' >
                        <LockIcon />
                        <input type={`${passwordVisible === true ? 'text' : 'password'}`} placeholder='enter your password' />
                        <Button className='visitButton' onClick={() => handlePasswordVisibility()} >
                            {passwordVisible === true ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </Button>
                    </div>
                    <div className='input-groups' >
                        <VerifiedUserIcon />
                        <select>
                            <option>Select Option</option>
                            <option value='select_user_role'>select user role</option>
                            <option value='admin'>admin</option>
                            <option value='member'>member</option>
                            <option value='client'>client</option>
                            <option value='manager'>manager</option>
                            <option value='vendor'>vendor</option>
                        </select>
                    </div>
                    <Button className='btn-blue passwordButton'>sign in</Button>
                    <Link to={'/forgotpassword'} className='forgot-link'>FORGOT PASSWORD</Link>
                    <div className='login-divide'>
                        <span>or</span>
                    </div>
                    <div className='login-social'>
                    <Button className='btn-blue twitter '> <FaTwitter /> Continue with Twitter</Button>
                    <Button className='btn-blue facebook'> <FaFacebookF /> Continue with facebook</Button>
                    </div>
                </form>

                <div className='form-auth-navigation'>
                    <span>Don't have an account?</span>
                    <Link className='link-nave' to={'/register'}>register</Link>
                </div>
            </div>
        </section>
    );
}

export default Login;
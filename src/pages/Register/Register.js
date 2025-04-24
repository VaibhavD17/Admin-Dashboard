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
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Register(props) {

    const context = useContext(MyContext);

    const [passwordVisible, setPasswordVisible] = useState(false)

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    useEffect(() => {
        context.setIsHideSidebarandHeader(true)
    }, [])

    return (
        <section id='register'>
            <div className='register-banner'>
                <img className='pattern-img' src='/assets/images/login_background.webp' />
                <div className='register-banner-content'>
                    <h2>Best ux/ui fashion ecommerce dashboard & admin panel</h2>
                    <p>Elit Iusto dolore libero recusandae dolor dolores explicabo ullam cum facilis aperiam   alias odio quam excepturi molestiae omnis inventore. Repudiandae officia placeat amet consectetur dicta dolorem quo</p>

                    <Link to={'/'}>
                        <Button className='btn-blue home-go-to'> <HomeIcon /> go to home</Button>
                    </Link>
                </div>
            </div>
            <div className='register-form'>


                <Link to={'/'} className='auth-img-login'>
                    <img src={'/assets/images/logo.webp'} />
                </Link>
                <h4 className='login-title'>Register a new account</h4>
                <form >
                    <div className='input-groups' >
                        <AccountCircleIcon />
                        <input type='text' placeholder='enter your name' />
                    </div>
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
                        <input type={`${passwordVisible === true ? 'text' : 'password'}`} placeholder='confirm your password' />
                        <Button className='visitButton' onClick={() => handlePasswordVisibility()} >
                            {passwordVisible === true ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </Button>
                    </div>
                    <div className='input-checkBox'>
                        <input type='checkbox' id='checkbox' />
                        <label for="checkbox">I agree to the all Terms & Condiotions</label>
                    </div>
                    <Button className='btn-blue passwordButton'>sign in</Button>

                    <div className='login-divide'>
                        <span>or</span>
                    </div>
                    <div className='login-social'>
                        <Button className='btn-blue twitter '> <FaTwitter /> Continue with Twitter</Button>
                        <Button className='btn-blue facebook'> <FaFacebookF /> Continue with facebook</Button>
                    </div>
                </form>

                <div className='register-navigation'>
                    <span>Already have an account?</span>
                    <Link className='link-nave' to={'/login'}>Login</Link>
                </div>

            </div>
        </section>
    );
}

export default Register;
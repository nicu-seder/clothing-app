import React, {useState} from "react";
import {connect} from 'react-redux';

//Import styles
import './sign-in.styles.scss';

//Import components
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";

//Import firebase
import {auth} from "../../firebase/firebase.utils";

//Import redux actions
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";


const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email:'', password:''});
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
        // try{
        //     await auth.signInWithEmailAndPassword(email, password);
        // }catch (e) {
        //     console.log("Couldnt sign in!", e.message);
        // }
        // this.setState({email: '', password: ''})
    };

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials,[name]: value});
    };


    return (
        <div className={'sign-in'}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name={'email'}
                           type={'email'}
                           value={email}
                           required
                           label={'Email'}
                           handleChange={handleChange}/>

                <FormInput name={'password'}
                           type={'password'}
                           value={password}
                           label={'Password'}
                           required
                           handleChange={handleChange}/>
                <div className={'buttons'}>
                    <CustomButton type={'submit'}>SIGN IN</CustomButton>
                    <CustomButton type={'button'} onClick={googleSignInStart} isGoogleSingIn>SIGN IN WITH
                        GOOGLE</CustomButton>
                </div>
            </form>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
    }
};

export default connect(null, mapDispatchToProps)(SignIn);
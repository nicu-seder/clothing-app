import React, {useState} from "react";
import {connect} from 'react-redux';

//Import styles
import './sign-up.styles.scss';

//Import components
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";

//Import firebase
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

//Import redux actions
import {signUpStart} from "../../redux/user/user.actions";

const SignUp = ({signUpStart}) => {
    const [userCredentials, setCredentials] = useState({displayName: '', email: '', password: '', confirmPassword: ''});
    const {email, password, displayName, confirmPassword} = userCredentials;

    const handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setCredentials({...userCredentials, [name]:value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password dont match');
            return;
        }
        signUpStart({email, password, displayName});

    };

        return (
            <div className={'sign-up'}>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className={'sign-up-form'} onSubmit={handleSubmit}>
                    <FormInput
                        name={'displayName'}
                        type={'text'}
                        value={displayName}
                        label={'Display name'}
                        handleChange={handleChange}
                    />
                    <FormInput
                        name={'email'}
                        type={'email'}
                        value={email}
                        label={'Email'}
                        handleChange={handleChange}
                    />
                    <FormInput
                        name={'password'}
                        type={'password'}
                        value={password}
                        label={'Password'}
                        handleChange={handleChange}
                    />
                    <FormInput
                        name={'confirmPassword'}
                        type={'password'}
                        value={confirmPassword}
                        label={'Confirm password'}
                        handleChange={handleChange}
                    />
                    <CustomButton type={'submit'}>Sign up</CustomButton>
                </form>
            </div>
        )
}

const mapDispatchToProps = dispatch => {
    return {
        signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
    }
};

export default connect(null, mapDispatchToProps)(SignUp);
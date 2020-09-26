import React from "react";

//Import styles
import './sign-up.styles.scss';

//Import components
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";

//Import firebase
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

class SignUp extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = (event)=>{
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]:value})
    };

    handleSubmit = async (event)=>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('Password dont match');
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch (e) {
            console.log("Couldnt perform the sign up", e.message);
        }

    };

    render() {
        return(
            <div className={'sign-up'}>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className={'sign-up-form'} onSubmit={this.handleSubmit}>
                    <FormInput
                        name={'displayName'}
                        type={'text'}
                        value={this.state.displayName}
                        label={'Display name'}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name={'email'}
                        type={'email'}
                        value={this.state.email}
                        label={'Email'}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name={'password'}
                        type={'password'}
                        value={this.state.password}
                        label={'Password'}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name={'confirmPassword'}
                        type={'password'}
                        value={this.state.confirmPassword}
                        label={'Confirm password'}
                        handleChange={this.handleChange}
                    />
                    <CustomButton type={'submit'}>Sign up</CustomButton>
                </form>
            </div>
        )
    }
};

export default SignUp;
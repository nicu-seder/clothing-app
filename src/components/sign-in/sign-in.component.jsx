import React from "react";

//Import styles
import './sign-in.styles.scss';

//Import components
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";

//Import firebase
import {signInWithGoogle, auth} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
        }catch (e) {
            console.log("Couldnt sign in!", e.message);
        }
        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    };

    render() {
        return (
            <div className={'sign-in'}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name={'email'}
                               type={'email'}
                               value={this.state.email}
                               required
                               label={'Email'}
                               handleChange={this.handleChange}/>

                    <FormInput name={'password'}
                               type={'password'}
                               value={this.state.password}
                               label={'Password'}
                               required
                               handleChange={this.handleChange}/>
                    <div className={'buttons'}>
                        <CustomButton type={'submit'}>SIGN IN</CustomButton>
                        <CustomButton type={'button'} onClick={signInWithGoogle} isGoogleSingIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
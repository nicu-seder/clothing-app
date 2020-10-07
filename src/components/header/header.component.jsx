import React from "react";

import {ReactComponent as Logo} from '../../assets/crown.svg'

//Import styles
// import './header.styles.scss';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./header.styles";

//Import firesbase
import {auth} from "../../firebase/firebase.utils";

//Import redux
import {connect} from 'react-redux';

//Import components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//Import reselect
import {createStructuredSelector} from "reselect";

//Import selectors
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";


const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to={'/'}>
                <Logo className={'logo'}/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to={'/shop'}>SHOP</OptionLink>
                <OptionLink to={'/contact'}>CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionLink as={'div'} onClick={() => auth.signOut()}>SIGN OUT</OptionLink> :
                        <OptionLink to={'/signin'}>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                hidden ?
                    null :
                    <CartDropdown/>
            }

        </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    });


export default connect(mapStateToProps, null)(Header);
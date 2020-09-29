import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_w8nBFvgghdhl9ssL7hJhwn3G00gUVzOONt';

    const onToken = token=>{
        console.log(token);
        alert('Payment successful')
    };
    return(
        <StripeCheckout stripeKey={publishableKey}
                        label={'Pay Now'}
                        name={'Clothing App'}
                        billingAddress
                        shippingAddress
                        image={'https://sendeyo.com/up/d/f3eb2117da'}
                        description={`Your total is $${price}`}
                        amount={priceForStripe}
                        panelLabel={'Pay Now'}
                        token={onToken}
        />
    )
};

export default StripeCheckoutButton;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/stripeImage.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IOFn7F2zub3PVMlWOVSG5hT2gC5kvHqM5m3kAV07RVtvdb3QfU2oC4JdFfadEcba0LqU480RfCvX4KLVB39Xiz700y99GdnSm';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN CLOTHING Ltd.'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
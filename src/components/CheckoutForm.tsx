import React, { useState } from 'react'
import {
    paymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js"

import PRODUCT from '../productInfo'

export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState<string | undefined>('');
    
}
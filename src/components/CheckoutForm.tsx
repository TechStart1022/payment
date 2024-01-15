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
    const [emailInput, setEmailInput] = useState<String>('');


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(elements == null || stripe == null) {
            return;
        }

        const { error: submitError } =  await elements.submit();
        if(submitError?.message) {
            setErrorMessage(submitError.message)
            return;
        }
        const res = await fetch('https://4b4f7gqeh9.us.aircode.run/payment', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }

}
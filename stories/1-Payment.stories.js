import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

export default {
  title: 'CardNumber'
};

export const cardNumber = () => {
  const [cardNumber, setCardNumber] = useState();
  const handleCardNumber = event => {
    setCardNumber(event.target.value);
    action(event.target.value);
  };

  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps
  } = usePaymentInputs();
  return (
    <PaymentInputsWrapper {...wrapperProps}>
      <svg {...getCardImageProps({ images })} />
      <input
        {...getCardNumberProps({ onChange: handleCardNumber })}
        placeholder='0000 0000 0000 0000'
        label='Card number'
        inputRef={getCardNumberProps().ref}
        value={cardNumber}
      />
    </PaymentInputsWrapper>
  );
};

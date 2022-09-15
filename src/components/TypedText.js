import React from 'react';
import Typist from 'react-typist';

// todo - pass down textToAnimate using props. avoid using class components
export default function TypedText(props) {
    const textToAnimate = props.textToAnimate
    return (
      <Typist>
        {textToAnimate}
      </Typist>
    );
  
}
import React, { Component } from 'react';
import Typist from 'react-typist';

export default class TypedText extends Component {

  render() {
    return (
      <Typist>
        Animate this text.
      </Typist>
    );
  }
}
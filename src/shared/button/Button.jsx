import React from 'react';
import props from 'prop-types';

function Button() {
  return (
    <button>
        {props.mytext}
        {props.icon}
    </button>
  )
}

export default Button
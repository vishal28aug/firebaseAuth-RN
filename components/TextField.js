import React, { useState } from 'react';
import { TextInput } from 'react-native';

const TextField = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      {...props}
      style={[
        props.style,
        isFocused && { borderWidth: 2, borderColor: 'blue' }]}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
    />
  );
};

export default TextField;

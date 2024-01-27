# input_custom

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/input_custom.svg)](https://www.npmjs.com/package/input_custom) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

You can install the component by using:

```bash
npm install --save input_custom
```

## Usage

Open your React project and go to the file requiring the input component and import the input

```jsx
import React, { Component } from 'react'

import { Input as Input } from 'input_custom'
import 'input_custom/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## How to use it

Once your import is complete, set up your props as needed, for example :

```jsx
<Fragment>
  <label>{label}</label>
  <input
    id={id}
    type={type}
    name={name}
    label={label}
    value={options}
    required={required}
  />
</Fragment>
```

## License

MIT © [Lykisa](https://github.com/Lykisa)

import React from 'react'

import { Input } from 'input_custom'
import 'input_custom/dist/index.css'

const App = () => {
  return (
    <Input
      type='select'
      name='firstName'
      id='firstName'
      label='First Name'
      required='required'
    />
  )
}

export default App

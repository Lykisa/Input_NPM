import React, { Fragment } from 'react'
import styles from './styles.module.css'

export const Input = ({ id, type, name, label, options, required }) => {
  if (type == 'select') {
    return (
      <Fragment>
        <label>{label}</label>
        <select id={id} required={required}>
          {options?.map((v, i) => (
            <option key={i} value={v}>
              {v}
            </option>
          ))}
        </select>
      </Fragment>
    )
  }

  return (
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
  )
}

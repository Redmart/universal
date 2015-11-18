import React, { Component } from 'react'

const Input = (props) =>
  <form onSubmit={props.handleOnSubmit} >
    <input type='text' defaultValue={props.defaultValue} placeholder={props.placeholder} onChange={props.handleOnChange} />
  </form>

export default Input

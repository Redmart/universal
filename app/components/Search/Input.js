import React, { Component } from 'react'

const Input = (props) =>
  <form onSubmit={props.handleOnSubmit} >
    <input type='text' placeholder='Search now' onChange={props.handleOnChange} />
  </form>

export default Input

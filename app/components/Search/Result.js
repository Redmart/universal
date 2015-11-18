import React, { Component } from 'react'
import Image from '../Misc/Image'

const Result = (props) =>
  <a className='card' target='_blank' href={'https://redmart.com/product/'+props.details.uri}>
    <p>{props.title}</p>
    <Image src={'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x'+props.img.name} />
  </a>

export default Result

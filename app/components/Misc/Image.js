import React, {Component, PropTypes} from 'react'

export default class Image extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  render () {
    const {src, width, height, className} = this.props

    const imageClass = 'img img_loaded'
    return <img onLoad={::this.fadeInImageOnLoad} style={{width: width, height: height}} className={imageClass} src={src} />
  }

  fadeInImageOnLoad () {
    this.setState({
      loaded: true
    })
  }

}

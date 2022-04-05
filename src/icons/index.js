import React from 'react'
import { ReactSVG } from 'react-svg'

const Svg = (context) => {
  return context.keys().reduce((item, modulePath, i) => {
    item[modulePath.replace(/.\/|.svg/g, '')] = props => {
      return <ReactSVG
        src={context.keys().map(context)[i]}
        beforeInjection={(svg) => {
          if (props.class) {
            svg.classList.add(props.class)
          }
          if (props.className) {
            svg.classList.add(props.className)
          }
          if (props.style) {
            const temp = props.style
            let style = ''
            Object.keys(temp).forEach(item => {
              style = style + item + ': ' + temp[item] + ';'
            })
            svg.setAttribute('style', style)
          }
        }}
      />
    }
    return item
  }, {})
}

export default Svg(require['context']('./svg', true, /\.svg$/))

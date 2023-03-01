import React from 'react'
import './style.less'

const SvgIcon = ({ icon, className }) => {
  const svgClass = className ? 'svg-icon ' + className : 'svg-icon'

  const iconName = `#icon-${icon}`

  return (
    <div className={`icon-${icon}-warp svg-icon-warp`}>
      <svg className={`${svgClass} icon-${icon}`} aria-hidden='true'>
        <use xlinkHref={iconName} />
      </svg>
    </div>
  )
}

export default SvgIcon

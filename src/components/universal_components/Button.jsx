import { Link } from 'gatsby'
import React from 'react'

const Button = ({children, isButton,btnSize, btnBgColor,btnStyle, btnShape}) => {

    const BTN_SIZES = ['btn__small','btn__medium','btn__large','btn__mobile']
    const BTN_STYLES = ['btn-normal__style','btn-primary__outline','btn-secondary__outline','btn-normal__outline']
    const  BTN_COLORS= ['btn-normal__color','btn__primary','btn__secondary']
    const BTN_SHAPES = ['btn-normal__shape','btn__rounded','btn__curved']




    const btnHasSize = BTN_SIZES.includes(btnSize) ? btnSize : BTN_SIZES[0]
  const btnHasColor = BTN_COLORS.includes(btnBgColor) ? btnBgColor : BTN_COLORS[0]
  const btnHasStyle = BTN_STYLES.includes(btnStyle) ? btnStyle : BTN_STYLES[0];
  const btnHasShape = BTN_SHAPES.includes(btnShape) ? btnShape : BTN_SHAPES[0]
    return (
        <>
        {isButton ? (
          <button
            className={`btn ${btnHasSize} ${btnHasColor} ${btnHasStyle} ${btnHasShape}`}
          >
            {children}
          </button>
        ) : (
          <Link
            className={`btn ${btnHasSize} ${btnHasColor} ${btnHasStyle} ${btnHasShape}`}
          >
            {children}
          </Link>
        )}
      </>
    )
}

export default Button

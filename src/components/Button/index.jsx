import React from 'react'
import style from './Button.module.sass'
import cx from 'classnames';
import PropTypes from 'prop-types';

export default function Button(props) {
    const { handler, caption, autoStyle } = props


    return (
        <button className={cx(style.button, { [style.stop]: autoStyle })}
            onClick={handler}
        > {caption}
        </button >
    )
}


Button.propTypes = {
    handler: PropTypes.func,
    caption: PropTypes.string,
    autoStyle: PropTypes.bool,
}
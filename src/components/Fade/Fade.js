import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition';
import classes from './Fade.scss'

const duration = 0;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 1
  },
  exited: {
    opacity: 0
  } 
};

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
);

Fade.propTypes = {
  fade: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Fade

export const keyframes = {
  enterFromTop: {
    from: { opacity: '0', transform: 'translateY(200px)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
  exitToTop: {
    from: { opacity: '1', transform: 'translateY(0)' },
    to: { opacity: '0', transform: 'translateX(200px)' },
  },
  enterFromRight: {
    from: { opacity: '0', transform: 'translateX(200px)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
  enterFromLeft: {
    from: { opacity: '0', transform: 'translateX(-200px)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
  exitToRight: {
    from: { opacity: '1', transform: 'translateX(0)' },
    to: { opacity: '0', transform: 'translateX(200px)' },
  },
  exitToLeft: {
    from: { opacity: '1', transform: 'translateX(0)' },
    to: { opacity: '0', transform: 'translateX(-200px)' },
  },
  scaleIn: {
    from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
    to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
  },
  scaleOut: {
    from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
    to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
  },
  fadeIn: {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  fadeOut: {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  slideIn: {
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
  },
  slideOut: {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(-100%)' },
  },
}

export const animation = {
  scaleIn: 'scaleIn 200ms ease',
  scaleOut: 'scaleOut 200ms ease',
  fadeIn: 'fadeIn 200ms ease',
  fadeOut: 'fadeOut 200ms ease',
  enterFromLeft: 'enterFromLeft 250ms ease',
  enterFromRight: 'enterFromRight 250ms ease',
  exitToLeft: 'exitToLeft 250ms ease',
  exitToRight: 'exitToRight 250ms ease',
  slideIn: 'slideIn 200ms ease-out',
  slideOut: 'slideOut 200ms ease-out',
}

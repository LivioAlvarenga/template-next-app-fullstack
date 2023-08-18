import { colors } from './colors'

export const accessibilityFocus = {
  '.accessibilityFocus:focus-visible': {
    boxShadow: `0 0 0 5px ${colors.primary}`,
    borderRadius: '4px',
    inset: '0px',
    position: 'relative',
    textDecorationLine: 'none',
    textDecorationThickness: '0px',
    outline: 'none',
  },
  '.accessibilityFocus:focus-visible:before': {
    content: '""',
    borderRadius: '4px',
    position: 'absolute',
    inset: '0px',
    boxShadow: `0 0 0 2px ${colors['l-300']}`,
    zIndex: '1',
  },
  '.dark .accessibilityFocus:focus-visible:before': {
    boxShadow: `0 0 0 2px ${colors['d-300']}`,
  },
}

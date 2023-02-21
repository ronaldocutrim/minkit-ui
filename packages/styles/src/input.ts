import { light } from '@min/colors'
import { fontSizes, fontWeight } from '@min/web'

export const input = {
  backgroundColor: '#fff',
  borderColor: light.primary.main,
  borderWidth: '1px',
  paddingTop: '16px',
  paddingBottom: '16px',
  paddingLeft: '16px',
  paddingRight: '16px',
  fontSize: fontSizes.sm,
  fontWeight: fontWeight.regular,
  borderRadius:  '2px',
  ':hover': {
    borderColor: 'red'
  }
}

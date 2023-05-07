import { light } from 'keeper-colors'
import { fontSizes, fontWeight } from '@minkit/web'

export const input = {
  width: '100%',
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

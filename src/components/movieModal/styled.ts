import { Box } from '@material-ui/core';
import { Theme, withStyles } from '@material-ui/core/styles';

export const ModalWrapper = withStyles(({ spacing }: Theme) => ({
  root: {
    width: 720,
    marginTop: spacing(4),
    marginLeft: 'auto',
    marginRight: 'auto',
    '& h5': {
      paddingLeft: spacing(2),
    },
  },
}))(Box);

export const ListCast = withStyles(({ spacing }: Theme) => ({
  root: {
    width: 320,
    height: 400,
    padding: spacing(2),
    marginBottom: spacing(2),
    overflowY: 'scroll',
    '&> span': {
      display: 'block',
    },
  },
}))(Box);

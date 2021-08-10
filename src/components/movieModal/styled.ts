import { Box } from '@material-ui/core';
import { Theme, withStyles } from '@material-ui/core/styles';


export const DialogWrapper = withStyles(({ spacing }: Theme) => ({
  root: {
    maxWidth: 720,
    marginTop: spacing(4),
    marginLeft: 'auto',
    marginRight: 'auto',
    '& h5': {
      marginBottom: spacing(2),
    },
    '& img': {
      borderRadius: 34,
    },
  },
}))(Box);

export const ListCast = withStyles(({ spacing }: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: spacing(1, 2, 2, 2),
    marginBottom: spacing(2),
    '&> span': {
      display: 'block',
    },
  },
}))(Box);

export const DialogCloseButton = withStyles(({ spacing }: Theme) => ({
  root: {
    position: 'fixed',
    margin: spacing(2, 3),
    right: 0,
    top: 0
  },
}))(Box);

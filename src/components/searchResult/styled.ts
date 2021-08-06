import { Box, Grid } from '@material-ui/core';
import { Theme, withStyles } from '@material-ui/core/styles';

export const StyledGridResult = withStyles(({ spacing }: Theme) => ({
  root: {
    marginTop: spacing(2),
    gap: spacing(4),
  },
}))(Grid);

export const StyledBoxNoResult = withStyles(({ spacing }: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: spacing(2),
  },
}))(Box);

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

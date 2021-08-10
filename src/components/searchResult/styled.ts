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


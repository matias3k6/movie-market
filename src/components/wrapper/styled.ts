import { Box } from '@material-ui/core';
import { Theme, withStyles } from '@material-ui/core/styles';

export const StyledWrapperBox = withStyles(({ palette }: Theme) => ({
  root: {
    backgroundColor: palette.grey[900],
    minHeight: '100vh',
  },
}))(Box);

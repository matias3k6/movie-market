import { Box, Card, CardMedia } from '@material-ui/core';
import { Theme, withStyles } from '@material-ui/core/styles';

export const StyledMovieCard = withStyles(({ palette }: Theme) => ({
  root: {
    width: 250,
    backgroundColor: palette.grey[800],
    borderRadius: 34,
    cursor: 'pointer',
    transition: 'transform 250ms',
    '&:hover': {
      transform: 'scale(1.015)',
    },
  },
}))(Card);

export const StyledContentWrapper = withStyles(({ spacing }: Theme) => ({
  root: {
    display: 'block',
    padding: spacing(1, 2, 3, 2),
  },
}))(Box);

export const StyledCardMedia = withStyles({
  root: {
    height: 420,
  },
})(CardMedia);

export const StarsBox = withStyles(({ spacing }: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: spacing(1),
    '& > *': {
      marginRight: spacing(1),
    },
  },
}))(Box);

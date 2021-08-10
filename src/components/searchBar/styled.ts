import { alpha, Box, OutlinedInput } from '@material-ui/core';
import { Theme, withStyles } from '@material-ui/core/styles';
import SearchBoxBackground from 'assets/images/search-bar-wallpaper.jpg';

export const StyledSearchWrapper = withStyles({
  root: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${SearchBoxBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
})(Box);

export const StyledSearchBox = withStyles(({ palette, spacing }: Theme) => ({
  root: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: spacing(10),
    backgroundColor: alpha(palette.common.black, 0.75),
    boxShadow: '-1px -54px 32px -18px rgba(0,0,0,0.8) inset',
  },
}))(Box);

export const StyledSearchTextField = withStyles(
  ({ spacing, typography, palette }: Theme) => ({
    root: {
      height: 68,
      borderRadius: 34,
      marginRight: spacing(4),
      padding: spacing(2,3,2,2),
      width: 428,
      fontSize: typography.pxToRem(28),
      backgroundColor: alpha(palette.common.black, 0.75),
    },
    notchedOutline: {
      borderWidth: '4px !important',
    },
  })
)(OutlinedInput);

import { Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderOutlined from '@material-ui/icons/StarBorderOutlined';
import { StarsBox } from './styled';

interface StarsProps {
  vote_count: number;
  vote_average: number;
}

const Stars = ({ vote_count, vote_average }: StarsProps): JSX.Element => {
  const oldRange = 10 - 0;
  const newRange = 5 - 0;
  const newValue = (oldValue: number) =>
    ((oldValue - 0) * newRange) / oldRange + 0;
  const average = newValue(vote_average);

  return (
    <StarsBox>
      <Rating
        name={'customized-empty'}
        defaultValue={0}
        value={average}
        precision={0.5}
        emptyIcon={<StarBorderOutlined fontSize={'small'} />}
        size={'small'}
        readOnly
      />
      <Typography variant={'caption'}>
        {average} ({vote_count} votes)
      </Typography>
    </StarsBox>
  );
};

export default Stars;

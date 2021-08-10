import { Box, Card, Modal, Typography } from '@material-ui/core';
import { ModalWrapper, ListCast } from './styled';

interface Cast {
  known_for_department: string;
  name: string;
}

interface MovieModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  cast: Cast[];
  image?: string;
}

const MovieModal = ({
  open,
  title,
  onClose,
  image,
  cast
}: MovieModalProps): JSX.Element => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalWrapper>
        <Card>
          <Box padding={2}>
            <Typography variant={'h4'}>{title}</Typography>
          </Box>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            paddingLeft={8}
          >
            <img
              src={
                image
                  ? `https://image.tmdb.org/t/p/w500/${image}`
                  : 'https://via.placeholder.com/254x380?text=No Image'
              }
              alt={title}
              height={380}
            />
            <ListCast>
              <Typography variant={'h5'}>Casting:</Typography>
              {cast.map((item: Cast) => (
                <span
                  key={item.name}
                >{`${item.name} | ${item.known_for_department}`}</span>
              ))}
            </ListCast>
          </Box>
        </Card>
      </ModalWrapper>
    </Modal>
  );
};

export default MovieModal;

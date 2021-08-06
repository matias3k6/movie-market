import { ReactNode } from 'react';
import { StyledWrapperBox } from './styled';

interface BoxWrapperProps {
  children: ReactNode;
}

export const BoxWrapper = ({ children }: BoxWrapperProps): JSX.Element => {
  return <StyledWrapperBox>{children}</StyledWrapperBox>;
};

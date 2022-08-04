import { useLocation } from 'react-router-dom';
import { BackBtnStyled } from './BackBtn.styled';

export const BackBtn = () => {
  const location = useLocation();

  return (
    <BackBtnStyled to={location?.state?.from ?? '/'} type="button">
      Go Back
    </BackBtnStyled>
  );
};
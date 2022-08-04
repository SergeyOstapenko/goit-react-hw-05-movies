import {
  NotFoundStyled,
    DivStyled,
    TextStyled,
  } from 'components/BackBtn/BackBtn.styled';
  
  export default function NotFound() {
    return (
      <DivStyled>
        <div>
          <img
            src="https://2fan.ru/upload/000/u1/3/7/805f88fd.jpg"
            alt="not found"
            width="500"
          />
          <TextStyled>
            Oooops, page not found
            <NotFoundStyled to="/goit-react-hw-05-movies/">
              to Home
            </NotFoundStyled>
          </TextStyled>
        </div>
      </DivStyled>
    );
  }
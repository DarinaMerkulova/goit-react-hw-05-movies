import { Oval } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <Oval
        height={80}
        width={80}
        color="rgb(26, 127, 141)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="rgb(14, 82, 91)"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </StyledLoader>
  );
};

import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Variants } from 'framer-motion';

import Icon from '@/assets/icon.png';

import useChangeTextField from '@/hook/useChangeTextField';
import useOnKeyUp from '@/hook/useOnkeyUp';
import toastContext from '@/context/toast';

import { Container, Content, ImgIcon, SearchBtn, SearchInput } from './styles';

const VARIANTS: Variants = {
  hidden: {
    translateX: '100%',
    filter: 'blur(10px)',
    opacity: .3
  },
  show: {
    translateX: 0,
    filter: 'blur(0px)',
    opacity: 1 
  }
};

const Search: React.FC = () => {
  const { handleShowToast } = useContext(toastContext);
  const [searchVal, setSearchVal] = useChangeTextField('');
  const navigate = useNavigate();

  const handleSearch = useCallback(() => {
    if (!searchVal)
      return handleShowToast({
        type: 'danger',
        message: 'You should type something on text field first',
        time: 5000,
      });
    navigate(`characters?q=${searchVal}`);
  }, [searchVal, handleShowToast, navigate]);

  const onKeyUpInput = useOnKeyUp([{
    keys: 'enter',
    callback: handleSearch
  }]);

  return (
    <Container
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={VARIANTS}
      transition={{ type: "spring", stiffness: 500, damping: 50, duration: 1.5 }}
    >
      <ImgIcon src={Icon} alt="Logo" />
      <Content>
        <SearchInput
          placeholder='Search Marvel characters'
          value={searchVal}
          onChange={setSearchVal}
          onKeyUp={onKeyUpInput}
        />
        <SearchBtn
          type="button"
          onClick={handleSearch}
        >
          Search
        </SearchBtn>
      </Content>
    </Container>
  );
}

export default Search;
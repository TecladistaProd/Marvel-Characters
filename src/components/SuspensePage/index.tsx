import {FC, LazyExoticComponent, Suspense} from 'react';

import Loading from '../Loading';

import { Container } from './styles';

interface IProps extends Record<string, unknown> {
  Page: LazyExoticComponent<FC>;
}

const SuspensePage: FC<IProps> = ({ Page, ...props }) => {
  return (
    <Suspense fallback={
      <Container>
        <Loading/>
      </Container>
    }>
      <Page {...props} />
    </Suspense>
  );
}

export default SuspensePage;
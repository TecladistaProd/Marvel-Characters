import {
  Link,
} from "react-router-dom";

import { Container } from './styles';

const Hero: React.FC = () => {
  return (
    <Container
      initial={{ rotateY: 180 }}
      animate={{ rotateY: 0 }}
      exit={{ rotateY: 180 }}
      transition={{ duration: 1.2 }}
    >
      <h1>Hero</h1>
      <Link to="/">Search</Link>
    </Container>
  );
}

export default Hero;
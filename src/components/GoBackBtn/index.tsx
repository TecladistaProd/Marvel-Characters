import { useDebouncedCallback } from "@react-hookz/web";
import { useNavigate } from "react-router-dom";

import { Container } from './styles';


const GoBackBtn: React.FC = () => {
  const navigate = useNavigate();
  const handleGoBack = useDebouncedCallback(() => {
    navigate(-1);
  }, [navigate], 300);

  return (
    <Container onClick={handleGoBack}>
      Go Back
    </Container>
  );
}

export default GoBackBtn;
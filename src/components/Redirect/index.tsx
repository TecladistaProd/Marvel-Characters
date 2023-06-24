import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  to: string;
}
const Redirect: React.FC<IProps> = ({ to }) => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    navigate(to, {
      replace: true
    })
  }, [to, navigate]);

  return null;
}

export default Redirect;
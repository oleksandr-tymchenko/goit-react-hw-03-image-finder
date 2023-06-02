import { Messge } from './ErrorMessage.styled';

export default function ErrorMessage({ children }) {
  return (
    <Messge role="alert">
      <h2>Oops! 😫</h2>
      <p>{children}</p>
    </Messge>
  );
}

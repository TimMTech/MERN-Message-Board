import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = ({ formInputs, handleChange, handleSubmit, showForm }) => {
  return (
    <FormWrapper>
      <StyledHeader>WHAT IS ON YOUR MIND...</StyledHeader>
      <StyledForm action="/new" method="POST">
        <StyledInput
          name="title"
          value={formInputs.title}
          onChange={(e) => handleChange(e)}
          placeholder="Title"
          type="text"
        />
        <StyledInput
          name="userName"
          value={formInputs.userName}
          onChange={(e) => handleChange(e)}
          placeholder="Username"
          type="text"
        />
        <TextArea
          name="message"
          value={formInputs.message}
          onChange={(e) => handleChange(e)}
          placeholder="Message"
          type="text"
        />
      </StyledForm>
      <StyledLink to={"/"}>
        <StyledSubmit onClick={handleSubmit}>Post</StyledSubmit>
      </StyledLink>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(242, 247, 255);
`;

const StyledHeader = styled.h1`
  font-size: 3rem;
  color: rgb(150, 222, 255);
  margin-bottom: 3rem;
`;

const StyledForm = styled.form`
  max-width: 70rem;
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: none;
  border-radius: 1rem;

  background-color: rgb(255, 255, 255);
  gap: 2rem;
`;

const StyledInput = styled.input`
  padding: 1rem;
  border: none;
  width: 100%;
  font-size: 1.5rem;
  word-wrap: break-word;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(179, 179, 179, 0.4);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: none;
  width: 100%;
  font-size: 1.5rem;
  word-wrap: break-word;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(179, 179, 179, 0.4);
  }
`;

const StyledSubmit = styled.button`
  color: rgb(150, 222, 255);
  width: 25rem;
  height: 4rem;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 1rem;
  font-size: 2rem;
  margin-top: 1rem;
  transition: 1s;
  cursor: pointer;
  &: hover {
    transform: scale(1.1, 1.1);
  }
`;

const StyledLink = styled(Link)`
  cursor: default;
`;

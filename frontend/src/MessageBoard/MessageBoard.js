import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment"

const MessageBoard = ({ posts }) => {

  const dateFormat = (date) => {
    return moment(date).startOf('hour').fromNow()
  }
  
  return (
    <StyledWrapper>
      <StyledHeader>MESSAGE BOARD</StyledHeader>
      <StyledMessageBoard>
        {posts.map((post) => {
          return (
            <Posts key={post.title}>
              <PostTitle>{post.title}</PostTitle>
              <PostMessage>{post.message}</PostMessage>
              <PostUserDateWrapper>
                <PostUser>{post.userName}</PostUser>
                <PostDate>{dateFormat(post.date)}</PostDate>
              </PostUserDateWrapper>
            </Posts>
          );
        })}
      </StyledMessageBoard>
      <StyledLink to={"/new"}>
        <CreatePostButton>Post</CreatePostButton>
      </StyledLink>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: rgb(242, 247, 255);
`;

const StyledHeader = styled.h1`
  font-size: 3rem;
  color: rgb(150, 222, 255);
`;

const StyledMessageBoard = styled.div``;

const Posts = styled.div`
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 5rem;
  margin-top: 2rem;
  border: none;
  border-radius: 0.8rem;
  background-color: rgb(255, 255, 255);
  padding: 3rem 4rem 2rem;
  gap: 1rem;
`;

const PostTitle = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  color: rgb(150, 222, 255);
`;

const PostUserDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostUser = styled.p`
  font-size: 1rem;
  color: rgb(150, 222, 255);
`;

const PostDate = styled.p``;

const PostMessage = styled.p`
  word-wrap: break-word;
  border-bottom: 0.05rem solid black;
  line-height: 1.5rem;
  padding-bottom: 1.2rem;
  max-width: 20rem;
`;

const CreatePostButton = styled.button`
  color: rgb(150, 222, 255);
  width: 10rem;
  height: 5rem;
  margin-bottom: 5rem;
  font-size: 2.5rem;
  border: none;
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
  transition: 1s;
  cursor: pointer;
  &: hover {
    transform: scale(1.1, 1.1);
  }
`;

const StyledLink = styled(Link)`
  cursor: default;
`

export default MessageBoard;

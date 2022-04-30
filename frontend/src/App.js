import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Form from "./Form/Form";
import MessageBoard from "./MessageBoard/MessageBoard";
import { useState, useEffect } from "react";
import postMessage from "./Utils/postMessage";
import getMessage from "./Utils/getMessage";

const App = () => {
  const [formInputs, setFormInputs] = useState({
    title: "",
    userName: "",
    message: "",
  });

  const [posts, setPosts] = useState([
    {
      title: null,
      userName: null,
      message: null,
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    postMessage(formInputs);
  };

  useEffect(() => {
    getMessage((posts) => {
      setPosts(posts);
    });
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<MessageBoard posts={posts} />} />
        <Route
          path="/new"
          element={
            <Form
              formInputs={formInputs}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

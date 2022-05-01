import axios from "axios"

const getMessage = (callBack) => {
    axios
      .get("https://mern-message-app.herokuapp.com/app/posts")
      .then((response) => {
        callBack(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
}

export default getMessage;
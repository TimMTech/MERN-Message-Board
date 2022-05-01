import axios from "axios"

const postMessage = (inputValues) => {
    axios
      .post("http://mern-message-app.herokuapp.com/app/new", inputValues)
      .then((response) => console.log(response.data));
}

export default postMessage
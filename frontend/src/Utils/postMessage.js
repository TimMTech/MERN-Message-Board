import axios from "axios"

const postMessage = (inputValues) => {
    axios
        .post("http://localhost:5000/app/new", inputValues)
        .then((response) => console.log(response.data))
}

export default postMessage
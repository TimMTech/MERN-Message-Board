import axios from "axios"

const getMessage = (callBack) => {
    axios
        .get('http://localhost:5000/app/posts')
        .then((response) => {
            callBack(response.data)
        })
        .catch((err) => {
            console.error(err)
        })
}

export default getMessage;
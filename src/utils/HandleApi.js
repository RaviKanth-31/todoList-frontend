import axios from 'axios'

const baseUrl = "https://daily-problems.onrender.com"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { text, prem: false, ravi: false })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId,setToDo, setText, setIsUpdating, pr, ra) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, prem: pr, ravi: ra })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


const deleteToDo = (_id, setToDo) => {
    const confirmed = window.prompt("Enter your password");
    if(confirmed==="123"){
        axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
    }

}


export { getAllToDo, addToDo,  deleteToDo, updateToDo }
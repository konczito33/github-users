const API_URL = `https://api.github.com/users/`
let name
const input = document.querySelector('.search')
const form = document.querySelector('.form')

const userName = document.querySelector('.user__name')

input.addEventListener('input', (e) => {
    name = e.target.value
    console.log(name)
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    displayUserData(getUser(name))
})

async function getUser(username){
    const {data} = await axios(API_URL + username)
    return data
}

async function displayUserData(data){
    const {login, avatar_url} = await data
    userName.innerHTML = login
    console.log(avatar_url)
}
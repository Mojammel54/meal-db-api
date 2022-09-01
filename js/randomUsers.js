const loadUsers = () => {

    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => displayUsers(data.results))

}

const displayUsers = users => {

    const userContainers = document.getElementById('users-container')
    for (const user of users) {
        console.log(user)

        const userDiv = document.createElement('div')
        userDiv.classList.add('user')

        userDiv.innerHTML = `
        
        <h3>user name: ${user.name.first}</h3>
        <p>Email: ${user.email}</p>
        <p>user location : ${user.location.city} ${user.location.country}</p>
        
        `

        userContainers.appendChild(userDiv)

    }


}
loadUsers()
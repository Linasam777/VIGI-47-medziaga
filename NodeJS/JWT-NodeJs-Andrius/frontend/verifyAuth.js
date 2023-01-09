const accessToken = localStorage.getItem('accessToken')

if (accessToken) { // TODO: jwt verify
    alert("Welcome!")
}
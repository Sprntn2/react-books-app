

// const login = (credentials) => {
//     fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials),
//     }).then(res => res.json()).then(data => {
//         console.log(data)
//         set({ isLoggedIn: true, user: data });
//     })
// }
const url = "http://localhost:3355/"
const login = async (credentials) => {
    const response = await fetch(url + "login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    })
    return response.json()
}

export { login, }
export const fetchUsers = async () => {
    const limit = 100
    const apiUrl = `https://randomuser.me/api/?results=${limit}`
    return fetch(apiUrl).then(response => response.json()).then(json => json.results)
}

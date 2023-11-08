export const fetchUsers = async (limit) => {
    const apiUrl = `https://randomuser.me/api/?results=${limit}`
    return fetch(apiUrl).then(response => response.json()).then(json => json.results)
}

export const sortUsers = (usersUnsorted, column) => {
    const usersSorted = usersUnsorted.sort(function (a, b){
        if (a[column] < b[column]){
            return -1
        } else if (a[column] > b[column]){
            return 1
        }return 0
    })
    return usersSorted
}

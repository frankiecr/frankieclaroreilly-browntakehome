import React from 'react'
import TableData from './TableData.js'
import TableHeader from './TableHeader.js'
import * as api from '../api.js'

function Table() {

    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const users = await api.fetchUsers()
                    .then(json => {
                        return json.map(u => {
                            return {
                                'id': u.login.uuid,
                                'firstname': u.name.first,
                                'lastname': u.name.last,
                                'country': u.location.country,
                                'dob': u.dob.date,
                            }
                        })
                    })
                setUsers(users)
            } catch (error) {
                console.error(error)
            }
        }
        fetchAllUsers()
    }, [])

    function handleClick(e) {
        const column = e.target.id
        const userData = [...users]
        const sortedUsers = userData.sort(function (a, b){
            if (a[column] < b[column]){
                return -1
            } else if (a[column] > b[column]){
                return 1
            }return 0
        })
        setUsers(sortedUsers)
    }

    return (
        <table>
            <thead>
                <TableHeader handleClick={handleClick}/>
            </thead>
            <tbody>
                <TableData users={users}/>
            </tbody>
        </table>
    )
}

export default Table

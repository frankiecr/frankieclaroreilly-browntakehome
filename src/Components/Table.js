import React from 'react'
import TableData from './TableData.js'
import TableHeader from './TableHeader.js'
import * as utils from '../utils.js'

function Table() {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const limit = 100
                const users = await utils.fetchUsers(limit)
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

    function setSelectedColumn(column) {
        const newSelectedCol = document.getElementById(column + '-header')
        newSelectedCol.classList.add('selected-header')
        const prevSelectedCol = document.getElementsByClassName('selected-header')
        const prevSelectedColArr = Array.from(prevSelectedCol)
        if (prevSelectedColArr.length > 0) {
            prevSelectedColArr.map(col => col.classList.remove('selected-header'))
        }
        newSelectedCol.classList.add('selected-header')
    }

    function handleClick(e) {
        const column = e.target.id
        setSelectedColumn(column)
        const userData = [...users]
        const usersSorted = utils.sortUsers(userData, column)
        setUsers(usersSorted)
    }

    return (
        <div className='table-wrapper'>
            <table className="sortable" summary="Table with user data for name, country, and birthday" role="table">
                <caption>
                    <span className="sr-only">column headers with buttons are sortable</span>
                </caption>
                <thead>
                    <TableHeader handleClick={handleClick}/>
                </thead>
                <tbody>
                    <TableData users={users}/>
                </tbody>
            </table>
        </div>
    )
}

export default Table

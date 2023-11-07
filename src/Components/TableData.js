import TableRow from './TableRow.js'

function TableData({users}) {
    
    function createTableRows(users) {
        return users.map(user =>
            <TableRow key={user.id} user={user}/>
        )
    }

    return (
        <>
            { createTableRows(users) }
        </>
    )
}

export default TableData

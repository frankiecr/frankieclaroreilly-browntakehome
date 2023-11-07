function TableHeader({handleClick}) {
    return (
        <tr>
            <th onClick={handleClick} id="firstname" className="sortable">First Name</th>
            <th onClick={handleClick} id="lastname" className="sortable">Last Name</th>
            <th onClick={handleClick} id="country" className="sortable">Country</th>
            <th>Date of Birth</th>
            <th>Birthday This Year</th>
        </tr>
    )
}

export default TableHeader

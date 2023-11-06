function TableHeader({handleClick}) {
    return (
        <tr>
            <th onClick={handleClick} id="firstname" className="sortable">First Name</th>
            <th onClick={handleClick} id="lastname" className="sortable">Last Name</th>
            <th onClick={handleClick} id="country" className="sortable">Country</th>
            <th>Date of Birth</th>
            <th>2023 Birthday</th>
        </tr>
    )
}

export default TableHeader

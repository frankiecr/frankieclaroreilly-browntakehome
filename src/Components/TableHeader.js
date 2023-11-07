function TableHeader({handleClick}) {
    return (
        <tr scope="row" role="row">
            <th onClick={handleClick} id="firstname" className="sortable" scope="col" role="columnheader">
                First Name
            </th>
            <th onClick={handleClick} id="lastname" className="sortable" scope="col" role="columnheader">
                Last Name
            </th>
            <th onClick={handleClick} id="country" className="sortable" scope="col" role="columnheader">
                Country
            </th>
            <th scope="col" role="columnheader">
                Date of Birth
            </th>
            <th scope="col" role="columnheader">
                Birthday This Year
            </th>
        </tr>
    )
}

export default TableHeader

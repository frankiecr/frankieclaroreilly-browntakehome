function TableHeader({handleClick}) {
    return (
        <tr role="row">
            <th id="firstname-header" className="sortable" aria-sort="ascending" scope="col" role="columnheader">
                <button onClick={handleClick} id="firstname">
                    First Name
                    <span aria-hidden="true"></span>
                </button>
            </th>
            <th id="lastname-header" className="sortable" aria-sort="ascending" scope="col" role="columnheader">
                <button onClick={handleClick} id="lastname">
                    Last Name
                    <span aria-hidden="true"></span>
                </button>
            </th>
            <th id="country-header" className="sortable" aria-sort="ascending" scope="col" role="columnheader">
                <button onClick={handleClick} id="country">
                    Country
                    <span aria-hidden="true"></span>
                </button>
            </th>
            <th className="not-sortable" scope="col" role="columnheader">
                Date of Birth
            </th>
            <th className="not-sortable" scope="col" role="columnheader">
                Birthday This Year
            </th>
        </tr>
    )
}

export default TableHeader

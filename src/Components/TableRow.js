function TableRow({user}) {
    const formattedBirthday = new Date(user.dob).toLocaleDateString()

    function generateDynamicBirthday(birthdate){
        const today = new Date(Date.now())
        const currentMonth = today.getMonth() + 1
        const bdayMonth = new Date(birthdate).getMonth() + 1
        if (bdayMonth === currentMonth) {
            const currentDay = new Date(today).getDate()
            const bdayDay = new Date(birthdate).getDate()
            if (currentDay < bdayDay) {
                return "coming up"
            } else if (currentDay === bdayDay) {
                return "is today!"
            } else {
                return "already happened"
            }
        } else if (currentMonth > bdayMonth) {
            return "already happened"
        } else {
            return "coming up"
        }
    }

    return (
        <tr role="row">
            <td role="cell">{user.firstname}</td>
            <td role="cell">{user.lastname}</td>
            <td role="cell">{user.country}</td>
            <td role="cell">{formattedBirthday}</td>
            <td role="cell">{generateDynamicBirthday(user.dob)}</td>
        </tr>
    )
}

export default TableRow

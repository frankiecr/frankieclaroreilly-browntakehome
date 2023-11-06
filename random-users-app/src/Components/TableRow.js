function TableRow({user}) {
    const formattedBirthday = new Date(user.dob).toLocaleDateString()

    function generateDynamicBirthday(birthdate){
        const today = new Date(Date.now())
        const currentMonth = today.getMonth() + 1
        const bdayMonth = new Date(birthdate).getMonth() + 1
        if (bdayMonth === currentMonth){
            const currentDay = new Date(today).getDate()
            const bdayDay = new Date(birthdate).getDate()
            if (currentDay < bdayDay){
                return "coming up"
            }else if (currentDay === bdayDay){
                return "is today!"
            }else{
                return "already happened"
            }
        }else if (currentMonth > bdayMonth){
            return "already happened"
        }else{
            return "coming up"
        }
    }

    return (
        <tr tabIndex={0}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.country}</td>
            <td>{formattedBirthday}</td>
            <td>{generateDynamicBirthday(user.dob)}</td>
        </tr>
    )
}

export default TableRow

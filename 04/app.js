const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '28',
        month: '05',
        year: '1985'
    }
}

const today = new Date();

if (today.getMonth() + 1 === Number(user.born.month) && today.getDate() === Number(user.born.day)) {
    console.log(`Happy birthday, ${user.firstName}!`)
}
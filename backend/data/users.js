import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        cropSelection: '',
        isAdmin: true
    },
    {
        name: 'Harshal',
        email: 'Harshal@example.com',
        cropSelection: 'paddy',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Shivam',
        email: 'Shivam@example.com',
        cropSelection: 'fruits',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
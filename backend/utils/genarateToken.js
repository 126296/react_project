import jwt from 'jsonwebtoken'

const generteToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, {
        expiresIn: '30d'
    })
}

export default generteToken
import bcrypt from "bcryptjs"


const data = {
    users: [
        {
            id: 666,
            name: "Sascha Woods",
            email: "sascha@email.com",
            password: bcrypt.hashSync("123456")
        }
    ]
}

export default data;
const bycrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');

const signupUser = async (req, res) => {
    const { name, email, password } = req.body
    console.log("req body", req.body)
    try {
        const salt = await bycrypt.genSalt(10)
        console.log("salt", salt)
        const hashedPassword = await bycrypt.hash(password, salt)
        console.log("hashedPassword", hashedPassword)
        const userCheckres = await userCheck({ email, name, password: hashedPassword })
        const saveRes = await userCheckres.save()
        console.log("saveRes", saveRes)
        res.send({
            status: 200,
            message: "signupUser Api is working",
            saveRes: saveRes,
            userCheckres: userCheckres
        })
    }
    catch (e) {
        console.log(e.message)
        res.send({
            status: 500,
            message: e.message,
        })
    }
}


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
const loginUser = async (req, res) => {
    const { email, password } = req.body
    console.log("req body", req.body)
    try {
       
        const databaseUser = await userCheck.findOne({ email: email });
        console.log("Database user found:", databaseUser);
        if (databaseUser) {
            const hashedPassword = databaseUser.password;
            const compareRes = await bycrypt.compare(password, hashedPassword);
            console.log("Password ", compareRes);
            if (compareRes) {
                const JWT_SECRET_KEY = 'attendence';
                console.log("JWT_SECRET_KEY:", JWT_SECRET_KEY);
                const token = jwt.sign({ email }, JWT_SECRET_KEY, { expiresIn: '1h' });
                console.log("Generated token:", token);
                res.status(200).send({
                    message: "Login successful",
                    token: token
                });
            }else {
                console.log("Incorrect password");
                res.status(401).send({
                    message: "Incorrect password"
                });
            }
        } else {
            console.log("Incorrect email");
            res.status(401).send({
                message: "Incorrect email"
            });
        }
    } catch (e) {
        console.log("Login error:", e.message);
        res.status(500).send({
            message: e.message,
        });
    }
}




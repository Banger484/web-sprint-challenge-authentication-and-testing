const Users = require('../users/users-model')
module.exports = {
    checkUsernameUnique,
    checkPayload,
}

async function checkUsernameUnique(req, res, next) {
    try{
        const existingUser = await Users.findByUsername(req.body.username)
        if(!existingUser) {
            next()
        } else {
            res.status(400).json({ message: "username taken"})
            next()
        }
    } catch (err) {
        next(err)
    } 
}
function checkPayload(req, res, next) {
    if (!req.body.username || !req.body.password) {
        res.status(400).json({ message: "username and password required" })
        next()
    } else {
        next()
    }
}
// 3- On FAILED registration due to `username` or `password` missing from the request body,
//       the response body should include a string exactly as follows: "username and password required".

//     4- On FAILED registration due to the `username` being taken,
//       the response body should include a string exactly as follows: "username taken".
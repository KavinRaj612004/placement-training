var mdb = require('mongoose')
var userschema = mdb.Schema 
({
    firstName: String,
    lastName: String, 
    email: String,
    password: String


})
var user_schema = mdb.model("users",userschema)
module.exports = user_schema
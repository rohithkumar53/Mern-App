const bcrypt = require('bcrypt');
//controller for register
exports.registerUser=async (req,res)=>{
    try {
        if(!req.body){
            return res.status(406).json({err:"You have to fill the registration form"});
        }
        let {email, password, passwordCheck, username}= req.body;
        if(!email || !password || !passwordCheck || !username){
            return res.status(406).json({err:"Not all fields have been entered"});
        }
        if(password.length<8){
            return res.status(406).json({err:"The password needs to be atleast 8 characters long!"});
        }
        if(password !== passwordCheck){
            return res.status(406).json({err: "Password must be same for verification"});
        }
        //hashing password
        const hash= await bcrypt.hashSync(password, 10);
        res.json({email, hash, passwordCheck, username});
    } catch (error) {
        res.status(500).json({err: error.message || "Error while registartion"});
    }
}
//controller for login
exports.login= (req, res)=>{
    try {
        if(!req.body){
            return res.status(406).json({err: "You have to enter the login credentials"});
        }
        const {email, password}= req.body;
        if(!email || !password){
            return res.status(406).json({err : "Not all fields have been entered"});
        }
        const user= "$2b$10$WDNpyiWnBhz1q575.R21DOcFbxNA05d6JegvQSIS5R.jVOLGR..mO";
        const isMatch= bcrypt.compare(password, user);
        res.json({email,isMatch});
    } catch (error) {
        res.status(500).json({err: error.message || "Error while login!!"});
    }
}
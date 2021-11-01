
//controller for register
exports.registerUser=(req,res)=>{
    try {
        if(!req.body){
            return res.status(406).json({err:"You have to fill the registration form"});
        }
        let {email, password, passwordCheck, username}= req.body;
        if(!email || !password || !passwordCheck || !username){
            return res.status(406).json({err:"Not all fields have been entered"});
        }
        if(passwordCheck.length<8){
            return res.status(406).json({err:"The password needs to be atleast 8 characters long!"});
        }
        if(password !== passwordCheck){
            return res.status(406).json({err: "Password must be same for verification"});
        }
        res.json({email, password, passwordCheck, username});
    } catch (error) {
        res.status(500).json({err: error.message || "Error while registartion"});
    }
}
//controller for login
exports.login= (req, res)=>{
    res.json({message: "controller Response"});
}
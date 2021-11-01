const express= require('express');
const app=express();
require('dotenv').config();
app.use(express.json());

const PORT= process.env.PORT || 8080;
app.get('/', (req,res)=>{
    res.send("Server Request ");
})
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
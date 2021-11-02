const express= require('express');
const app=express();
require('dotenv').config();
app.use(express.json());

const PORT= process.env.PORT2 || 8080;

app.use('/api', require('./router/router'));

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
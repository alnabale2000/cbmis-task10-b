const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/test',(req,res)=>{
    res.status(200).json('Sure, Its work')
})

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`ServerApp is connected on port :: ${PORT}`);
})
// db.sequelize.authenticate().then(()=>{
//     app.listen(PORT,()=>{
//         console.log(`ServerApp is connected on port : ${PORT}`);
//     })
// })



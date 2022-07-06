const Sequelize=require('sequelize');
const db={}
const sequelize=new Sequelize("cbmisdb","admin","00000000",{
    host:"cbmisdb.csdaz0ct5kih.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "port": "3306",
    define:{
        timestamps:false,
        freezeTableName:true
    },
    
})

db.sequelize=sequelize;

module.exports=db
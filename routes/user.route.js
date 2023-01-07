
import express from "express";
import { createUser,generateHashedPassword,getuserByName} from "../services/user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router=express.Router();
  
router.post("/signup", async function (request, response) {
    const {username,password}= request.body;
    // console.log(data);
    //to check the repeatation in the username :
     const userFromDB= await getuserByName(username);
console.log(userFromDB);
if(userFromDB){
    response.status(400).send({message:"username already exist"});
}
else if(password.length< 8)
{
    response.send({message:"password must be atleast 8 characters"});
}
else{
    const hashedPassword= await generateHashedPassword(password);
    const result = await createUser({
        username:username,
        password:hashedPassword,
    });
    response.send(result);
}
  });

  router.post("/login", async function (request, response) {
    const {username,password}= request.body;
    // console.log(data);
    //to check the repeatation in the username :

     const userFromDB= await getuserByName(username);
console.log(userFromDB);

if(!userFromDB){  
    response.status(401).send({message:"username incorrect"});
}

else{
   const storeDBPassword=userFromDB.password;
   const isPasswordCheck = await bcrypt.compare(password,storeDBPassword)
   console.log(isPasswordCheck);

   if(isPasswordCheck){
    //we write a code for TOKEN this is a way to get the token value.
    const token =jwt.sign({id :userFromDB._id},process.env.SECRET_KEY);
    response.send({message:"succesfully login",token:token})
}else{
    response.status(401).send({message:"password incorrect"});
}
}
//// we give a token value then we install the webtoken package ;


});
  export default router;
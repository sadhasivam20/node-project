
import jwt from "jsonwebtoken"
  export const auth =(response,request,next)=>{
   try{const token=response.header("X-auth-token");
    console.log("token",token);
    jwt.verify(token , process.env.SECRET_KEY);
    next();
}
    catch(err){
      response.status(401).send({message:"invalid token"});
    }
 }
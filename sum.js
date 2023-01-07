// console.log(process.argv);
// const[, , num] = process.argv;
// const double=(n)=>n*2;
// console.log(double(num));


// const [, , a, b]=process.argv;
// const sum=(a,b)=>a+b;
// console.log(sum(+a,+b));


// this is a write method to create the file and add the value inside the text file...//
// const fs=require("fs"); 

// const [, , n]=process.argv;
// console.log(n);

// const quote2= "be happy always because life is very short";
//  for( let i=1;i<=n;i++){
//     fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>{
//         console.log("message printed...");
//     });
//  }
  
//this is bascis of readFile :
// const fs=require("fs");
// fs.readFile("./cool.txt","utf-8",(err,data)=>{
//     console.log(data);
// })

  //we use if else in the readFile: the file is not exit it can show an error:

// const fs=require("fs");
// fs.readFile("./cool.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("👎")
//     }
//     else{
//         console.log(data); 
//     }
 
// });
// //append can be used in the format:
// const re="firrtst";
// const quote3="fffjgjmgdgngjhufgdnlvnlvl";
// fs.appendFile("./cool.txt", re + "\n",(err)=>{
//     console.log("Add Successfully");
// });





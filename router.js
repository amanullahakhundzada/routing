const e = require("express");
const express=require("express")
const route=express.Router();
var accounts=require("./database")

// GET request 
route.get("/accounts",(req,res)=>{
    res.json({userData:accounts})
})
//POST
route.post("/accounts",(req,res)=>{
    const incomingAccount=req.body;
    accounts.push(incomingAccount)
    res.json(accounts)
})
route.get("/accounts/:Id",(req,res)=>{
    const accountId=Number(req.params.Id);
    const getAccount=accounts.find((account)=>account.Id==accountId)
    if(!getAccount){
         res.status(500).send("Account not Found");
   }else{
    res.json({userData:[getAccount]})
   }
})

route.put("/accounts/:Id",(req,res)=>{ 
    const accountId=Number(req.params.Id);
    const body=req.body;
    const account=accounts.find((account)=>account.Id==accountId)
    const index = accounts.indexOf(account)
    if(!account){
res.status(500).send("Account not found")
    }else{
    
      const updatedAccount={...account,...body}
    //   console.log({...account,...body});
    account[index]=updatedAccount
      res.send(updatedAccount)
    }
})
// Delete Request 
route.delete('/accounts/:Id',(req,res)=>{
    const accountId=Number(req.params.Id)
    const newAccounts=accounts.filter((account)=>  account.Id != accountId)
   if(!newAccounts){
    res.status(500).send("Account not found")
   }else{
    accounts = newAccounts;
    res.send(accounts)
   
}
}   )

module.exports=route;
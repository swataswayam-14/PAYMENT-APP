const express = require("express")
const authMiddleware = require("../middleware/authenticateUser")
const { Account } = require("../db")
const accountRouter = express.Router()
const zod = require("zod")

accountRouter.get('/balance',authMiddleware,async(req,res)=>{
    try{
        const account = await Account.findOne({
            userId: req.userId
        })
        if(account){
            const balance = account.balance
            res.status(200).json({
                balance: balance
            })
        }else{
            res.status(411).json({
                message:'There is some problem , try again later'
            })
        }
    }catch(e){
        res.status(411).json({
            message:'There is some problem , try again later'
        })
    }
})

const transferObject = zod.object({
    to: zod.string(),
    amount:zod.number()
})
accountRouter.post('/transfer',authMiddleware,async(req,res)=>{
    const {success} = transferObject.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message:'Invalid inputs'
        })
    }
    const senderAccount = await Account.findOne({
        userId: req.userId
    })
    const balance = senderAccount.balance
    if((balance-req.body.amount) < 0){
        return res.status(400).json({
            message:"insufficient balance"
        })
    }
    const recieverAccount = await Account.findOne({
        userId: req.body.to
    })
    if(recieverAccount){
        await Account.updateOne({
            userId:req.userId
        },{
            $inc :{
                balance: -req.body.amount
            }
        })

        await Account.updateOne({
            userId:req.body.to
        },{
            $inc:{
                balance: req.body.amount
            }
        })
        return res.status(200).json({
            message:'Transfer Successful'
        })
    }else{
        return res.status(400).json({
            message:'Invalid Account'
        })
    }

})


module.exports = accountRouter
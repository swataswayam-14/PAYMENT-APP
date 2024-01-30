const express = require("express")
const userRouter = express.Router()
const {User, Account} = require("../db/index")
const zod = require("zod")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")
const authMiddleware = require("../middleware/authenticateUser")

const signUpBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})


//signUp route
userRouter.post('/signup',async(req,res)=>{
    try{
        //console.log('request came');
        const {success} = signUpBody.safeParse(req.body)
        if(!success){
            res.status(411).json({
                message:'Email already taken/ incorrect inputs'
            })
        }
        const username = req.body.username
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const password = req.body.password

        let isAlreadyExists = await User.findOne({
            username
        })
        if(isAlreadyExists){
            res.status(411).json({
                message: "Email already taken/ incorrect inputs"
            })
        }
        const user = await User.create({
            username,
            password,
            firstname,
            lastname
        })
        const user_id = user._id
        await Account.create({
            userId: user_id,
            balance: 1 + Math.floor(Math.random()*10000) //a random balace is given to the user
        })
        const token = jwt.sign({
            user_id
        },"secret")
        res.json({
            message:'User created successfully',
            token:token
        })
    }catch(e){
        res.json({
            message:"there is some problem, please try again later"
        })
    }  
})

const signInObject = zod.object({
    username:zod.string().email(),
    password:zod.string()
})

userRouter.post('/signin',async(req,res)=>{
    console.log('a sign in request');
    const {success} = signInObject.safeParse(req.body)
    if(!success){
        res.status(411).json({
            message:'Incorrect inputs'
        })
    }
    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({
        username,
        password
    })
    if(user){
        const user_id = user._id
        const token = jwt.sign({
            user_id
        },"secret")
    
        res.status(200).json({
            token:token
        })
        return
    }

    res.status(411).json({
        message:'Error while logging in'
    })
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
})

userRouter.put('/',authMiddleware, async(req,res)=>{
    console.log(req.userId);
    const {success} = updateBody.safeParse(req.body)
    if(!success){
        res.status(411).json({
            message:'Error while updating information'
        })
    }
    try{
        await User.findOneAndUpdate({
            _id:req.userId
        },req.body)
        res.json({
            message:'Updated successfully'
        })
    }catch(e){
        res.status(411).json({
            message:'Error while updating information'
        })
    }
})

userRouter.get('/bulk', async(req,res)=>{
    const filter = req.query.filter || ""
    const users = await User.find({
        $or:[{
            firstname :{
                "$regex":filter
            }
        },{
            lastname:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user: users.map(user =>({
            username : user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

module.exports = userRouter
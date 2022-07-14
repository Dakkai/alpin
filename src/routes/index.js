const { Router } = require('express');
const router = Router();

router.post('/', (req,res,next)=>{
    const obj = {}
    const {body} = req
    for (const key in body) {
        if(body[key]){obj[key]= body[key]}
        if(typeof obj[key] === "object" && !Object.keys(obj[key]).length ){delete obj[key]}
    }
    res.send(obj)
})


router.get("/",(req,res,next)=>{
    console.log(req.query)
    const {string} = req.query 

    res.send({
        Value: string,
        StringLength: string.length,
        reverse: string.split("").reverse().join("")

    })
})
module.exports = router;

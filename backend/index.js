const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();

app.use(express.json());


app.get("/",(req, res)=>{


});

app.post("/todo",(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You've sent the wrong inputs",
        })
        return;
    }
    //

})

app.get("/todos",()=>{

})

app.put("/completed",(req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You've sent the wrong inputs",
        })
        return;
    }
    
})


app.listen("4343");
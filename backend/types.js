const zod = require("zod");

// const todoSchema = z.object({
//     id : z.number(),
//     title: z.string(),
//     description: z.string(),
//     isCompleted: z.boolean()
// })

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}
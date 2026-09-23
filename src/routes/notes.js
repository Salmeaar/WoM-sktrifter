const express = require('express')
const router = express.Router()

const{ PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()


router.get('/', async (req, res) => {
    const notes = await prisma.notes.findMany({
        orderBy: {
            id: 'asc'
        }
    })
    res.send(notes)
})

router.post('/', async (req, res) => {
    console.log(req.body)

    const note = await prisma.notes.create({
        data:{ 
        author_id: 1,
        note: req.body.note}
    })

    res.send({
        msg:"Note created",
        id: note.id
    })
})

router.put('/:id', async (req, res) => {
    
    const note = await prisma.notes.update({
        where: { id: Number(req.params.id) },
        data: { 
            note: req.body.note,
            updated_at: new Date() }
    })
    
    res.send({
        msg: "Note updated",
        id: note.id,
        newNote: note.note,
        updatedAt: note.updated_at
    })
})


router.delete('/:id', async (req, res) => {
    
    const note = await prisma.notes.delete({
        where: { id: Number(req.params.id) }
    })

    res.send({
        msg: "Note deleted",
        id: note.id
    })
})

module.exports = router
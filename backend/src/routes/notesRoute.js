import express from 'express';
import { createNotes, updateNotes, deleteNotes, getNotes, getNoteById } from '../controllers/notesController.js';
const router = express.Router();

router.get('/test', async()=>{
    return res.status(200).json({success: true ,Message:"Testing Successfull"});
})
router.get('/', getNotes)
router.get('/:id', getNoteById)
router.post('/', createNotes)
router.put('/:id', updateNotes)

router.delete('/:id', deleteNotes)

export default router
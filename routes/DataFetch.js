import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Project from '../model/DoneProject.js'
// import authenticateJWT from '../middleware/authenticate.js';

const router = express.Router();


// ✅ Public Route - no auth
router.get('/', async (req, res) => {
    try {
        const myData = await Project.find();
        res.status(200).json({dataList:myData });
        console.log(myData);
    } catch (err) {
        console.error("Error querying users:", err);
        res.status(500).send({ message: 'Database query error', error: err.message });
    }
});


// Fetch all users (excluding soft deleted ones)
// router.get('/', authenticateJWT, async (req, res) => {
//     try {
//         const users = await doneProject.find({ deleted: false });
//         res.status(200).json({ allUsers: users });
//         console.log(users)
//     } catch (err) {
//         console.error("Error querying users:", err);
//         res.status(500).send({ message: 'Database query error', error: err.message });
//     }
// });

// Protected Route
// router.get('/protected', authenticateJWT, (req, res) => {
//     res.json({ message: `Hello user ${req.user._id}, this is a protected route!` });
// });

export default router;
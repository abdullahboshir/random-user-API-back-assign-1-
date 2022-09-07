const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

const {getAllUsers, postAUser} = userController;

// get all users 
router.route('/all')
.get(getAllUsers)

router.route('/random')
.get(userController.randomUser)

router.route('/save')
.post(postAUser)

router.route('/update/:id')
.patch(userController.updateUser)

router.route('/bulk-update/:id1/:id2/:id3/:id4/:id5')
.patch(userController.multipleUpdate)

router.route('/:id')
.get(userController.multiUserUpdate)
// .patch(userController.multiUserUpdate)
.delete(userController.deleteAUser)




module.exports = router;
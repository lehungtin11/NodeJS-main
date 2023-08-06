const CoursesController = require('../app/controllers/CoursesController')
const MeController = require('../app/controllers/MeController')
const express = require('express')
const router = express.Router()
const middleware = require('../middleware')

router.get('/create', middleware.isAdmin, CoursesController.create)
router.post('/store', CoursesController.store)
router.put('/updated', MeController.updated)
router.get('/update', middleware.auth, CoursesController.update)
router.get('/restore', middleware.auth, MeController.restore)
router.get('/me/trash', middleware.auth, MeController.trash)
router.get('/me/manage', middleware.isAdmin, MeController.manage)
router.get('/me/handletrash', middleware.auth, MeController.handleTrash)
router.delete('/me/deletemany', MeController.deleteMany)
router.delete('/me/trash/:id', MeController.destroy)
router.delete('/me/:id', MeController.delete)
router.post('/reply', CoursesController.reply)
router.get('/reply/delete', CoursesController.deleteReply)
router.post('/comment/:slug', CoursesController.comment)
router.get('/:id', middleware.auth, CoursesController.show)
router.get('/', CoursesController.index)

module.exports = router

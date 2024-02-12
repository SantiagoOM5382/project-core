const router = require('express').Router()
const brandController = require('../../controllers/brand')

router.post(
    '/create', 
    brandController.create
)

router.put(
    '/edit/:id', 
    brandController.update
)

router.delete(
    '/delete/:id',
    brandController.delete
)


module.exports = router

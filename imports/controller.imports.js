const { getAllBooks, getSingleBook, addBookController, borrowBookController, buyBook, requestToBorrowBook, respondToBorrowRequest } = require('../controllers/book.controller')
const { createUser, getAllUsers, loginUser } = require('../controllers/user.controller')

module.exports = {
     getAllBooks,
     getSingleBook,
     addBookController,
     createUser,
     getAllUsers,
     loginUser,
     borrowBookController,
     buyBook,
     requestToBorrowBook,
     respondToBorrowRequest
}
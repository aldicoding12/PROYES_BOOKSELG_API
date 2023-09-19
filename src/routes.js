const {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require('./handler')

const routes = [
  {
    method: 'POST', // Kriteria 3: API dapat menyimpan buku
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET', // Kriteria 4: API dapat menampilkan seluruh buku
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET', // Kriteria 5: API dapat menampilkan detail buku
    path: '/books/{bookId}',
    handler: getBookById,
  },
  {
    method: 'PUT', // Kriteria 6: API dapat mengubah data buku
    path: '/books/{bookId}',
    handler: updateBook,
  },
  {
    method: 'DELETE', // Kriteria 7: API dapat menghapus buku
    path: '/books/{bookId}',
    handler: deleteBook,
  },
]

module.exports = routes

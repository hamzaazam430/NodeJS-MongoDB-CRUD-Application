const express = require("express");
const {
    getAllAuthors,
    createAuthor,
    getAllBlogsByAuthorId
  } = require("../controllers/AuthorController");

  const router = express.Router();
  
  router.route("/").get(getAllAuthors).post(createAuthor);
//   router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
  
  module.exports = router;
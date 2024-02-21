const authorService = require("../services/AuthorService");

exports.getAllAuthors = async (req, res) => {
    try {
      const blogs = await authorService.getAllAuthors();
      res.json({ data: blogs, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.createAuthor = async (req, res) => {
    try {
      const blog = await authorService.createAuthor(req.body);
      res.json({ data: blog, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
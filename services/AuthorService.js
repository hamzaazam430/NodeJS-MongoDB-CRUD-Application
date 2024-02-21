const AuthorModel = require("../models/Author");

exports.getAllAuthors = async () => {
  return await AuthorModel.find();
};

exports.createAuthor = async (author) => {
  return await AuthorModel.create(author);
};
exports.getAuthorById = async (id) => {
  return await AuthorModel.findById(id);
}; 

exports.updateAuthor = async (id, author) => {
  return await AuthorModel.findByIdAndUpdate(id, author);
};

exports.deleteAuthor = async (id) => {
  return await AuthorModel.findByIdAndDelete(id);
};

const express = require("express");
const app = express();
const dotenv = require("dotenv");

const connectToMongo = require("./databaseConnector");
const blogRouter = require("./routes/BlogRoutes");
const authorRouter = require("./routes/AuthorRoutes");

//connect to mongoose
connectToMongo();

//middleware
app.use(express.json());

app.use("/api/blogs", blogRouter);
app.use("/api/author", authorRouter);
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;


/*

Model -> Service -> Controller -> Router

*/
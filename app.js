const express = require("express");
const app = express();
const dotenv = require("dotenv");

const connectToMongo = require("./databaseConnector");
const blogRouter = require("./routes/BlogRoutes");

//connect to mongoose
connectToMongo();

//middleware
app.use(express.json());

app.use("/api/blogs", blogRouter);
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;
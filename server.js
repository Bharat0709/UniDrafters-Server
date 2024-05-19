
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8000;

dotenv.config({ path: "./.env" });

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});

// mongoose.connect(DB);

// const db = mongoose.connection;

// db.on("error", (error) => {
//   console.error("MongoDB connection error:", error);
// });

// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
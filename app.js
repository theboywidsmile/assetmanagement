const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const categoryRoutes = require("./routes/categoryRoutes");
const menuItemRoutes = require("./routes/menuItem");
const statsRoutes = require("./routes/dashboardRoutes.js");
const uploadRoutes = require("./routes/uploadRoutes");

const connectDb = require("./config/db");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/menu-items", menuItemRoutes);
app.use("/api/dashboard", statsRoutes);
app.use("/api/uploads", uploadRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDb().then(() => {
  app.listen(PORT, () =>
    console.log(`Server ${PORT}-portda ishga tushdi!`)
  );
});
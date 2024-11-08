require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const router = require("./routers/auth");
const contactRoute = require("./routers/contact-router");
const connectDB = require("./utils/db");
const serviceRoute = require("./routers/service-router");
const adminRoute = require("./routers/admin-router");
const cors = require("cors");
// const errorMiddleware = require("./middlewares/error-middleware");

// working on cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS",
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
// app.use(errorMiddleware);

// All Routers
app.use("/", (req, res) => {
    return res.send("Backend is running properly...");
});
app.use("/myapi", router);
app.use("/myapi/form", contactRoute);
app.use("/myapi/data", serviceRoute);

// Admin Routes
app.use("/myapi/admin", adminRoute);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

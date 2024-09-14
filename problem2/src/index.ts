import express, { Application } from "express";
import routes from "./routes"; // Assuming you have defined some routes in "routes.ts"

const app: Application = express();
const PORT = 3000;

app.use(express.json());

// Root route (to fix the "Cannot GET /" error)
app.get("/", (req, res) => {
    res.send("This is my API!");
});

// Use the routes from "routes.ts"
app.use("/api/resources", routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
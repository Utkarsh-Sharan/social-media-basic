import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`App is listening on port: ${port}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect with MongoDB!");
        process.exit(1);
    })
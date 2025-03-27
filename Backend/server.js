import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js"



app.listen(4000, () => {
    console.log('Server is running on http://localhost:3000')
})

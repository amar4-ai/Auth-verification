import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import atuhRoutes from "./routes/auth.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT=process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({origin:"http://localhost:5173", credentials:true}));

app.use(express.json());// allos us to parse incoming requests:req.body

app.use(cookieParser());// allow us to parse incoming cookies



//api
app.use("/api/auth", atuhRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*splat", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}


app.listen(PORT,()=>{
    connectDB();
    console.log("Server is runnig on port:", PORT);
})
import express from "express";
import { fileURLToPath } from 'url'; 
import path from "path";
import { User } from "./models/user.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const app = express();

app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/read', (req, res) => {
    res.render("read");
});

app.post('/create', async (req, res) => {
    let { name, email, image } = req.body;

    let createdUser = await User.create({
        name,
        email,
        image,
    });

    res.send(createdUser);
});

app.listen(3000, () => {
    console.log("App listen on Port 3000 ")
});

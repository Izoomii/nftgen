import express from "express";
import { createAvatar } from "./imgProcess";

const server = express();
const port = 4044;
// server.use(express.urlencoded({ extended: true }));
// server.use(express.json());

server.set("view engine", "pug");
server.use(express.static("public"));

server.get("/main", (req, res) => {
  res.render("main", {
    imgSrc: "../results/base_model face_1 hat_3 cloth_2.png",
    arrTest: ["thing1", "thing2", "thing3", "ting X"],
  });
});

//creates avatar, commented so it actually doesnt :p
console.log("uncomment the function bruh");
//createAvatar();

server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

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

// createAvatar("background_white.png", [
//   "base_model.png",
//   "face_2.png",
//   "hat_3.png",
//   "cloth_1.png",
// ]);

server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

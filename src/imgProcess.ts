import { read } from "jimp";
import { sorter } from "./sorter";

// const createAvatar = async (background: string, composites: string[]) => {
//   let cloneBg = (await read(`assets/${background}`)).clone();
//   let imgName = "";

//   for (let i = 0; i < composites.length; i++) {
//     cloneBg.composite((await read(`assets/${composites[i]}`)).clone(), 0, 0);
//     imgName += composites[i].split(".png").join(" ");
//   }

//   cloneBg.write(`results/${imgName.trim()}.png`);
//   console.log(`Created avatar "${imgName.trim()}.png"`);
// };

const createAvatar = async () => {
  const blueprint = sorter();
  const name = Date.now();
  const mainComposite = (await read("assets/template/template.png")).clone();
  for (let i = 0; i < blueprint.length; i++) {
    mainComposite.composite(await read(blueprint[i].path), 0, 0);
  }
  mainComposite.write(`results/${name}.png`);
  console.log(`Created avatar ${name}.png`);
};

export { createAvatar };

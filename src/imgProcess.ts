import { read } from "jimp";

const createAvatar = async (background: string, composites: string[]) => {
  let cloneBg = (await read(`assets/${background}`)).clone();
  let imgName = "";

  for (let i = 0; i < composites.length; i++) {
    cloneBg.composite((await read(`assets/${composites[i]}`)).clone(), 0, 0);
    imgName += composites[i].split(".png").join(" ");
  }

  cloneBg.write(`results/${imgName.trim()}.png`);
  console.log(`Created avatar "${imgName.trim()}.png"`);
};

export { createAvatar };

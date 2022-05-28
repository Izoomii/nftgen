import { read } from "jimp";
import { verifier } from "./verifier";

const createAvatar = async () => {
  const blueprint = await verifier();
  if (blueprint === null) return;
  let name: string[] = [];
  const mainComposite = (await read("assets/template/template.png")).clone();
  for (let i = 0; i < blueprint.length; i++) {
    mainComposite.composite(await read(blueprint[i].path), 0, 0);
    name.push(`${blueprint[i].name}`);
  }
  mainComposite.write(`results/${name}.png`);
  console.log(`Created avatar ${name.join("__")}.png`);
};

export { createAvatar };

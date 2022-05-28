import { prisma } from "./libs/prisma";
import { read } from "jimp";
import { sorter } from "./sorter";

interface SimpleObject {
  [key: string]: string;
}

const verifier = async () => {
  const blueprint = sorter();
  const items: SimpleObject = {};
  for (let i = 0; i < blueprint.length; i++) {
    items[blueprint[i].item] = blueprint[i].name;
  }

  const existingAvatar = await prisma.avatar.findUnique({
    where: {
      model_bg_clothes_face_hat: {
        model: items.model,
        bg: items.bg,
        clothes: items.clothes,
        face: items.face,
        hat: items.hat,
      },
    },
  });
  if (existingAvatar) {
    console.log(`Avatar already exists. [ID:${existingAvatar.id}]`);
    return null;
  }
  const newAvatar = await prisma.avatar.create({
    data: {
      model: items.model,
      bg: items.bg,
      clothes: items.clothes,
      face: items.face,
      hat: items.hat,
    },
  });
  console.log(`Avatar created in database. [ID: ${newAvatar.id}]`);

  return blueprint;
};

export { verifier };

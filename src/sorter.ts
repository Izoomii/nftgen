import { readdirSync } from "fs";
import { basename } from "path";
interface folderMultipleChances {
  folder: string;
  chances: number[];
}

interface folderSingleChance {
  folder: string;
  chance: number;
}

export const sorter = () => {
  //put all main folders and their possible chances in array then send them to funcs below
  const elementFolders = readdirSync("./assets/composites/");
  const constructedArray: folderMultipleChances[] = [];
  elementFolders.forEach((folder) => {
    const chances = readdirSync(`./assets/composites/${folder}`).map((e) => {
      return parseFloat(e);
    });
    constructedArray.push({ folder, chances });
  });
  //these ones
  const folderChances = sortChances(constructedArray);
  const blueprint = pickItems(folderChances);
  return blueprint;
  //cool names and all that, BLUEPRINT THAT, YEAH NOW SEND THE BLUE PRINT TO THE DATABASE
  //ENHANCE, ENHANCE
};

//takes each folder and picks one of the chance sub-folders
const sortChances = (
  chancesArr: folderMultipleChances[]
): folderSingleChance[] => {
  const pickMeArr = chancesArr.map((elem) => {
    const result = elem.chances.filter((e) => e > Math.random());
    return {
      folder: elem.folder,
      chance: result.length
        ? result[Math.floor(Math.random() * result.length)]
        : elem.chances[Math.floor(Math.random()) * elem.chances.length],
    };
  });
  return pickMeArr;
};

//picks an element from each given chance sub-folder and returns the item name and path
const pickItems = (foldersArr: folderSingleChance[]) => {
  const composites = foldersArr.map((e) => {
    const compositesArr = readdirSync(
      `./assets/composites/${e.folder}/${e.chance.toString()}`
    );
    const itemName =
      compositesArr[Math.floor(Math.random() * compositesArr.length)];
    return {
      item: e.folder,
      chance: e.chance,
      name: basename(itemName, ".png"),
      path: `./assets/composites/${
        e.folder
      }/${e.chance.toString()}/${itemName}`,
    };
  });
  return composites;
};

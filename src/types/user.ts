import { Optional } from "./optional";
import { createPantryItem, PantryItem } from "./pantry";

export interface User {
  email: string;
  username: string;
  pantry: PantryItem[];
}

export const createUser = (obj: any): Optional<User> => {
  if (!obj) {
    return null;
  }
  const email = obj.email;
  const username = obj.username;
  const pantry: PantryItem[] = [];

  if (obj.pantry) {
    for (const item of obj.pantry) {
      const pItem = createPantryItem(item);

      if (pItem) {
        pantry.push(pItem);
      } else {
        return null;
      }
    }
  }

  if (!email) {
    return null;
  }
  if (!username) {
    return null;
  }

  return { email, username, pantry };
};

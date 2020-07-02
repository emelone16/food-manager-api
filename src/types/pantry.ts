import { Optional } from "./optional";

export interface PantryItem {
  name: string;
  amount: number;
  unit: string;
}

export const createPantryItem = (obj: any): Optional<PantryItem> => {
  if (!obj) {
    return null;
  }

  const name = obj.name;
  const amount = obj.amount;
  const unit = obj.unit;

  if (!name) {
    return null;
  }

  if (!amount) {
    return null;
  }

  if (!unit) {
    return null;
  }

  return { name, amount, unit };
};

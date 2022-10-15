import { Item } from "@/gilded-rose";

export abstract class ItemManager {
  /**
   * base constructor for passing item over to their respective managers
   * @param item
   */
  constructor(protected item: Item) {}
  /**
   * abstract method for handling business logic of each individual type of item
   */
  abstract update(): void;
}

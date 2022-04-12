import { MealComposite } from '../interfaces/meal-composite';

export class MealBox implements MealComposite {
  private readonly _children: MealComposite[] = [];

  getPrice(): number {
    return this._children.reduce((acc, item) => (acc += item.getPrice()), 0);
  }

  add(...meal: MealComposite[]) {
    this._children.push(...meal);
  }
}

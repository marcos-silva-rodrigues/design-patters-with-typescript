import { MealBuilder } from '../interfaces/meal-builder';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilder {
  private _mealBox: MealBox = new MealBox();

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 2);
    const meat = new Meat('Carne', 7);
    this._mealBox.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('Coca', 8);
    this._mealBox.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Pudim', 15);
    this._mealBox.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._mealBox;
  }
}

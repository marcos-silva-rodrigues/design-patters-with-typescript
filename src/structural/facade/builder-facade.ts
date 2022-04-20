import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';

export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder();

  makeMeal(): void {
    const meal = this.mainDishBuilder.makeMeal();
    console.log(meal.getMeal());
    console.log(meal.getMeal().getPrice());
  }

  makeDessert(): void {
    const dessert = this.mainDishBuilder.makeDessert();
    console.log(dessert.getMeal());
    console.log(dessert.getMeal().getPrice());
  }
}

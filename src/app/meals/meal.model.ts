export class MealItem {
  constructor(public name: string, public imagePath: string, public timeCooking: number, public ingredients: any){
    this.name = name;
    this.imagePath = imagePath;
    this.timeCooking = timeCooking;
    this.ingredients = ingredients;
  }
}

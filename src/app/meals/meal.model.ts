export class MealItem {
  constructor(public name: string, public imagePath: string, public timeCooking: number){
    this.name = name;
    this.imagePath = imagePath;
    this.timeCooking = timeCooking;
  }
}

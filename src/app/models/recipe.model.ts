import {CommentModel} from "./comment.model";

export class RecipeModel {
  constructor(
    public name: string,
    public id: string,
    public origin: string,
    public type: string,
    public difficulty: string,
    public imagePath: string,
    public cookingTime: string,
    public ingredients: string[],
    public description: string,
    public comments?: CommentModel[]) {
  }
}

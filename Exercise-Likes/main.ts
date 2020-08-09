
import { Like } from "./likes";

let like = new Like(3);

like.LikeButtonClick();
console.log(`Likes Count : ${like.numLikes}`);
console.log(`Button State : ${like.buttonState}`);
like.LikeButtonClick();
console.log(`Likes Count : ${like.numLikes}`);
console.log(`Button State : ${like.buttonState}`);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likes_1 = require("./likes");
var like = new likes_1.Like(3);
like.LikeButtonClick();
console.log("Likes Count : " + like.numLikes);
console.log("Button State : " + like.buttonState);
like.LikeButtonClick();
console.log("Likes Count : " + like.numLikes);
console.log("Button State : " + like.buttonState);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_numLikes) {
        this._numLikes = _numLikes;
        this._buttonState = false;
    }
    Object.defineProperty(Like.prototype, "numLikes", {
        get: function () {
            return this._numLikes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "buttonState", {
        get: function () {
            return this._buttonState;
        },
        enumerable: false,
        configurable: true
    });
    Like.prototype.LikeButtonClick = function () {
        this._numLikes += (this._buttonState) ? -1 : 1;
        this._buttonState = !(this._buttonState);
    };
    return Like;
}());
exports.Like = Like;

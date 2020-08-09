
export class Like {

  private _buttonState : boolean;

  constructor(private _numLikes) {
    this._buttonState = false;
  }

  get numLikes(){
    return this._numLikes;
  }

  get buttonState(){
    return this._buttonState;
  }


  LikeButtonClick(){

    this._numLikes += (this._buttonState) ? -1 : 1;
    this._buttonState = !(this._buttonState);

    
  }

}

export class User {
  /*The token is private and with a '_' because we should access it only by a getter, to verify its validity*/
  constructor(public email: string, public id: string, private _token: string, private _tokenExpirationdate: Date, public expiresIn: string) {
  }

  get token() {
    if (!this._tokenExpirationdate || new Date() > this._tokenExpirationdate) {
      return null;
    }
    return this._token;
  }
}

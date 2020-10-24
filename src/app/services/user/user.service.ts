import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_token = 'http://localhost:8000/api/auth/login'
  private URL_user = 'http://localhost:8000/api/auth/check'

  constructor(private http: HttpClient) {}

  postUserToken(value){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post(this.URL_token, JSON.stringify(value), httpOptions)
  }

  postUser(auth_token, value){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.post(this.URL_user, JSON.stringify(value), httpOptions)
  }

}

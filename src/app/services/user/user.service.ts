import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_token = 'http://localhost:8000/api/auth/login'
  private URL_logout = 'http://localhost:8000/api/auth/logout'
  private URL_user = 'http://localhost:8000/api/auth/check-admin'

  constructor(private http: HttpClient) {}

  postUserToken(value){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post(this.URL_token, JSON.stringify(value), httpOptions)
  }

  getAdmin(auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.get(this.URL_user, httpOptions)
  }

  getLogout(auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.get(this.URL_user, httpOptions)
  }

}

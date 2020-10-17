import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:8000/api/user'
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json'
  //   }),
  //   observe: 'response'
  // }

  constructor(private http: HttpClient) {}

  getUser() {
    // console.log('Request is sent!')
    // return this.http.get(this.URL).subscribe(result => {
    //   console.log(result);
    // })
  }


  postUser(value:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post(this.URL, JSON.stringify(value), httpOptions)
  }

}

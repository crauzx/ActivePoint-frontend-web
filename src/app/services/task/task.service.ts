import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL_all_task = 'http://localhost:8000/api/task'
  private URL_insert_task = 'http://localhost:8000/api/task'

  constructor(private http: HttpClient) { }

  getAllTask(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get<any[]>(this.URL_all_task, httpOptions)
  }

  postTask(value, auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.post(this.URL_insert_task, JSON.stringify(value), httpOptions)
  }

}

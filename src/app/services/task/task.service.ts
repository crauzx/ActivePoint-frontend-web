import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL_task = 'http://localhost:8000/api/task'

  constructor(private http: HttpClient) { }

  getAllTask(auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.get<any[]>(this.URL_task, httpOptions)
  }

  postTask(value, auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.post(this.URL_task, JSON.stringify(value), httpOptions)
  }

  deleteTask(id, auth_token){
    const URL_delete_task = `http://localhost:8000/api/task/${id}`
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.delete(URL_delete_task, httpOptions)
  }

  putTask(value, auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.put(this.URL_task, JSON.stringify(value), httpOptions)
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareTaskService {

  private URL_share_task_approve = 'http://localhost:8000/api/task/share/approve'
  private URL_share_task_decline = 'http://localhost:8000/api/task/share/decline'
  private URL_share_task = 'http://localhost:8000/api/task/share/admin'

  constructor(private http: HttpClient) { }

  getAllShareTask(auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.get<any[]>(this.URL_share_task, httpOptions)
  }

  postApproveShareTask(value, auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.post(this.URL_share_task_approve, JSON.stringify(value), httpOptions)
  }

  postDeclineShareTask(value, auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.post(this.URL_share_task_decline, JSON.stringify(value), httpOptions)
  }

}

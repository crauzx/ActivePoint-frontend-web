import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  private URL_reward = 'http://localhost:8000/api/reward'

  constructor(private http: HttpClient) { }

  getAllReward(auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.get<any[]>(this.URL_reward, httpOptions)
  }

  postReward(value, auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.post(this.URL_reward, JSON.stringify(value), httpOptions)
  }

  deleteReward(id, auth_token){
    const URL_delete_reward = `http://localhost:8000/api/reward/${id}`
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.delete(URL_delete_reward, httpOptions)
  }

  putReward(value, auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.put(this.URL_reward, JSON.stringify(value), httpOptions)
  }

}

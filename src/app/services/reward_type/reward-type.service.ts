import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RewardTypeService {

  private URL_reward_types = 'http://localhost:8000/api/reward/type'

  constructor(private http: HttpClient) { }

  getAllRewardTypes(auth_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    }
    return this.http.get<any[]>(this.URL_reward_types, httpOptions)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class userService {
  url="https://bookcart.azurewebsites.net/api/user"
  constructor(private http:HttpClient) { }
   postre(post:any){
     return this.http.post(this.url,JSON.stringify(post))
   }
}

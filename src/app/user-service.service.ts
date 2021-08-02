import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class userService {
  url="https://bookcart.azurewebsites.net/api/user"
  constructor(private http:HttpClient) { }
   postre(post:any){
    const httpHeader=new HttpHeaders({
      'content-type':'application/json'
    });
     return this.http.post(this.url,JSON.stringify(post),{headers:httpHeader})
   }
}

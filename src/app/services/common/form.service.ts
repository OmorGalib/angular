import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';



const API_URL = environment.apiBaseLink ;

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private  httpClient: HttpClient
  ) { }

  postAllFormInfo(body?:any){
    return this.httpClient.post(API_URL +'/posts',body)
  }
}

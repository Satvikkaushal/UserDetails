import { environment } from './../../environments/environment';
import { users } from './../modals/data.modal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../modals/data.modal';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get<users[]>(environment.BaseUrl);
  }

  getUser(id) {
    return this.http.get<user[]>(environment.BaseUrl + "/" + id);
  }
}



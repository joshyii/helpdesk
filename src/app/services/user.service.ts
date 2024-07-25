import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/Admin/userdata';

const baseUrl = `${environment.apiUrl}/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl2:string ="https://ap-helpdesk.eezapps.com/helpdesk/api";

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
  
  // for get all user data
  getAllUserData(): Observable<User[]> {
    
    const url = `${this.baseUrl2}/User`;
    const headers = this.getHeaders();
    return this.http.get<User[]>(url, { headers });
    
    //return this.http.get<User[]>(this.baseUrl2);
  }

  getAll() {
    return this.http.get<User[]>(baseUrl);
  }

  getById(id: string) {
      return this.http.get<User>(`${baseUrl}/${id}`);
  }

  create(params: any) {
      return this.http.post(baseUrl, params);
  }

  update(id: string, params: any) {
      return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
      return this.http.delete(`${baseUrl}/${id}`);
  }


}
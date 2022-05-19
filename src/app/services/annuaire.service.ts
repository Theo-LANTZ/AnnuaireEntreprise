import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annuaire } from '../models/annuaire.model';
const baseUrl= "http://localhost:8080/api/annuaires";
@Injectable({
  providedIn: 'root'
})
export class AnnuaireService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Annuaire[]>{
    return this.http.get<Annuaire[]>(baseUrl);
  }
  get(id: any): Observable<Annuaire>{
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data:any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id:any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl);
  }
  findByName(name:any): Observable<Annuaire[]>{
    return this.http.get<Annuaire[]>(`${baseUrl}?name=${name}`);
  }
}

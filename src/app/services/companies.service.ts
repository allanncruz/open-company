import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Companies } from 'src/interface/types';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private apiUrl = 'http://localhost:3000/companies';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Companies[]> {
    return this.http.get<Companies[]>(this.apiUrl);
  }
}

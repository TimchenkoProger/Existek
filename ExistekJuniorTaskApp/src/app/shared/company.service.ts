import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Company } from './company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:58545/api/Companies'
  }

    getCompanies() {
        return this.http.get<Company[]>(this.url);
    }

    getCompany(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createCompany(company:Company) {
        return this.http.post(this.url, company);
    }
    updateCompany(company:Company) {
        return this.http.put(this.url, company);
    }
    deleteCompany(id: number) {
        return this.http.delete(this.url + '/' + id);
    }


}

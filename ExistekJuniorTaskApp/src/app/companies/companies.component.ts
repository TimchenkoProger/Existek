import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../shared/company.service';
import { NgForm } from '@angular/forms';
import { Company } from '../shared/company.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers:[CompanyService]
})
export class CompaniesComponent implements OnInit {

  ngOnInit(): void {
     this.loadCompanies();
  }
  constructor(public service:CompanyService) {
  }

  title = 'ExistekJuniorTaskApp';
  tableMode: boolean = true;
  company:Company = new Company();
  companies$:Observable<Company[]> = new Observable<Company[]>();

  loadCompanies()
  {
    this.companies$ = this.service.getCompanies();
  }
  save() {
        if (this.company.id == 0) {
            this.service.createCompany(this.company)
            .subscribe(
                res => {
                  this.loadCompanies();
                },
                err => { console.log(err) }
              );
        } else {
            this.service.updateCompany(this.company)
            .subscribe(
                res => {
                  this.loadCompanies();
                },
                err => { console.log(err) }
              );
        }
        this.cancel();
    }
    editCompany(item: Company) {
        this.company = item;
    }
    cancel() {
        this.company = new Company();
        this.tableMode = true;
    }
    deleteCompany(item: Company) {
        this.service.deleteCompany(item.id)
        .subscribe(
            res => {
              this.loadCompanies();
            },
            err => { console.log(err) }
          );
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}

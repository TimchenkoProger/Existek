import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../shared/company.service';
import { WorkerService } from '../shared/worker.service';
import { NgForm } from '@angular/forms';
import { Company } from '../shared/company.model';
import { Worker } from '../shared/worker.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css'],
  providers:[CompanyService, WorkerService]
})
export class WorkersComponent implements OnInit {

  ngOnInit(): void {
     this.loadWorkers();
     this.loadCompanies();
  }
  constructor(public companyService:CompanyService,public workerService:WorkerService) {
  }
  tableMode: boolean = true;
  worker:Worker = new Worker();
  companies$:Observable<Company[]> = new Observable<Company[]>();
  workers$:Observable<Worker[]> = new Observable<Worker[]>();
  info:string = "";

  loadWorkers()
  {
    this.workers$ = this.workerService.getWorkers();
  }
  loadCompanies(){
    this.companies$ = this.companyService.getCompanies();
  }
  save() {
        if (this.worker.id == 0) {
            this.workerService.createWorker(this.worker)
            .subscribe(
                res => {
                  this.loadWorkers();
                },
                err => { console.log(err) }
              );
        } else {
            this.workerService.updateWorker(this.worker)
            .subscribe(
                res => {
                  this.loadWorkers();
                },
                err => { console.log(err) }
              );
        }
        this.cancel();
    }
    editWorker(item: Worker) {
        this.worker = item;
    }
    cancel() {
        this.worker = new Worker();
        this.tableMode = true;
    }
    deleteWorker(item: Worker) {
        this.workerService.deleteWorker(item.id)
        .subscribe(
            res => {
              this.loadWorkers();
            },
            err => { console.log(err) }
          );
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}

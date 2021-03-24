import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Worker } from './worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:58545/api/Workers'
  }

    getWorkers() {
        return this.http.get<Worker[]>(this.url);
    }

    createWorker(worker:Worker) {
        return this.http.post(this.url, worker);
    }
    updateWorker(worker:Worker) {
        return this.http.put(this.url, worker);
    }
    deleteWorker(id: number) {
        return this.http.delete(this.url + '/' + id);
    }


}

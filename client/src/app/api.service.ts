import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient) { 

    }

    //NOTE: use this to bring in json file for configuration
    ngOnInit() {
        //this.testRoute();
    }

    //testRoute(): Observable<any> {
    //    return this.get("localhost:8080/ping");
    //}

    addImage() {
        //return this.http.post("localhost:8080/addimage"
    }

}

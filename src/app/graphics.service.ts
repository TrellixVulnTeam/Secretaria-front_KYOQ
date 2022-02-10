import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {
    public alerts: Array<any> = [];
    url = " http://127.0.0.1:8000/api/graphics"
    users : any;


    constructor(private http: HttpClient) { }

    public pie() {
        return this.http.get(this.url +'/pie');
    }
    public line(year:any) {
        return this.http.get(this.url +'/line/'+ year);
    }
}

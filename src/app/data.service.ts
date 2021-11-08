import { Injectable } from '@angular/core';
import { DbService} from './db.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    File: any;
    Users: any;
    Agrupations:any;
    Oficces:any;

  constructor( private DB : DbService ) { }

  }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DbService {

    public alerts: Array<any> = [];
    url = "http://localhost:8000/api"
    users : any;


  constructor(private http: HttpClient) { }

  login(user:any): Observable<any>{

        var email = user.email;
        var password =user.password;
        var remember_me = true;

        return this.http.post<any>(this.url + '/auth/login', { email, password, remember_me });
  }

  signup(user:any) {
    return this.http.post<any>(this.url + '/auth/signup', user);
  }

  user(type, token){

    const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': type + " " + token,
        })
    };
    return this.http.get(this.url + "/auth/user", httpOptions);
}

userList(){
    return this.http.get(this.url + '/auth/list');
}

logout(type, token){
    const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': type + " " + token,
        })
    };
    return this.http.get(this.url + "/auth/logout", httpOptions);
    }


file_total(){
    return this.http.get(this.url + "/files/total");
}

File_list(){
    return this.http.get(this.url + "/files");
}

Agrupations_list(){
    return this.http.get(this.url + "/agrupations");
}

GoToUrl(url:any){
    return this.http.get(url);
}

File_update(data:any){
    return this.http.post(this.url + '/files/update', data);
}

File_search(data:any){
    return this.http.post(this.url + '/files/search', data);
}









    listGroup (){
        return this.http.get(this.url + "/group");
    }

    listOffices(){
        return this.http.get(this.url + "/office");
    }

    createExp (exp:any){
        return this.http.post<any>(this.url + '/files', exp);
    }

    listExp( page:any ){
        return this.http.get(page);
    }

    editExp( exp:any){
        return this.http.post<any>(this.url + "/files/edit", exp);
    }
    searhExp(id){
        return this.http.get(this.url + "/file/"+ id);
    }


    search (file:any){
        return this.http.post<any>(this.url + '/files/search?page=' + file.page, file);
    }

    searchPasse(id:any){
        return this.http.get(this.url + "/passes/passe/"+ id);
    }

    createPasses(newPasse:any){
        return this.http.post<any>(this.url + '/passes/create', newPasse);
    }

    searchPasses(id_exp:any){
        return this.http.get(this.url + "/passes/"+ id_exp);
    }

    updatePasses(passes:any){
        return this.http.post(this.url + '/passes/closed', passes);
    }

    createInternalPasses (newInternalPasse:any){
        console.log("aca vamos con ");
        console.log( newInternalPasse);

        return this.http.post<any>(this.url + '/internalpasses/create/', newInternalPasse);
    }

    searchInternalPasses(id_passe:any){

        return this.http.get(this.url + "/internalpasses/"+ id_passe);
    }
    editInternalPasses(passe:any){

        return this.http.post(this.url + "/internalpasses/edit/", passe);
    }
    searchInternalPasse(id_passe:any){

        return this.http.get(this.url + "/internalpasses/passe/"+ id_passe);
    }
}

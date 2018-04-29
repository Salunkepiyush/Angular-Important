import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { DataList } from '../model/jsonData';

@Injectable()
export class ApiService{
   // public data:any;
    public Base_url: string = 'https://reqres.in/api/users';

    constructor(private http:HttpClient,){}

    getData(): Observable<DataList>{
        debugger
        return this.http.get<DataList>(this.Base_url)
        .pipe(
            tap(data => this.log("fetched data"),
            catchError(this.handleError('getData',[]))
            )
        )
    }

    postData(jsonData:any):Observable<any>{
        return this.http.post<any>(this.Base_url,jsonData)
        .pipe(
            catchError(this.handleError('postData',[]))
        );
    }

    private log(message: string) {
        console.log(message);
      }
     
    private handleError<T>(operation = 'operation',result?: T){
        return (error:any):Observable<T> =>{
            console.error(error);
            return of(result as T);
        }
    }  
}
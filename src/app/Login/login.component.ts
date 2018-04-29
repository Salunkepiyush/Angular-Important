import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../RouteSetting/app.service';

@Component({
    selector : 'login-page',
    templateUrl : './login.html'
})
export class LoginPage{
    myform : FormGroup;
    formdata : any;
    jsonData : {
        "id":"1"
    }

    constructor(private fb :FormBuilder, private router: Router,private service : ApiService){
        this.myform = this.fb.group({
            username : ['',Validators.required],
            password : ['',Validators.required]
        })
    }

    Login(myform){
        debugger
        //this.getData();
        this.postData(this.jsonData);
        //this.router.navigate(['/welcome']);
    }

    getData():void{
        debugger
        this.service.getData()
        .subscribe(data => this.Responsedata(data));
        
    }

    postData(jsonData){
        this.service.postData(jsonData).
        subscribe(data => this.Responsedata(data));
    }
    Responsedata(data : any){
        this.formdata = data.data;
        console.log(this.formdata);
    }
}
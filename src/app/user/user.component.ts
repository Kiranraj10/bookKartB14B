import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userService } from '../user-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  
  constructor(private formbuilder:FormBuilder,private register:userService){}

  
  ngOnInit(){
  
  }

  
  condition=true;
  show="show";
  
  onclick(){
    if(this.show=="show"){
    this.show=""
    }else{
      this.show="show"
    }
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value/1000) + 'k';
    }

    return value;
  }
  
  newvar={
    "userId": 0,
    "firstName": "asfccfhsa",
    "lastName": "as ghhg",
    "username": "asghhsgh",
    "password": "caschcca",
    "gender": "stragvsghxghing",
    "userTypeId": 0
 }
 
 submit(){
  console.log(this.newvar)
   
  this.register.postre(this.newvar).subscribe((data: any)=>{

    console.log(this.newvar)
  })

  
  
 }
 

  
  
  reactiveform:FormGroup=this.formbuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required,Validators.minLength],
    confirmPassword:['',Validators.required],
    gender:['',Validators.required]
  }

  );
  

  
  

  
  get first(){
    return this.reactiveform.get('firstname')
  }
  get second(){
    return this.reactiveform.get('lastname')
  }
  get third(){
    return this.reactiveform.get('username')
  }
  get fourth(){
    return this.reactiveform.get('password')
  }
  get next(){
    return this.reactiveform.get('confirmPassword')
  }
  get gender(){
    return this.reactiveform.get('gender')
  }
  

  val="visibility_off"
  icon(inp:any){
    if(this.val=="visibility_off"){
      this.val = "visibility"
      inp.type="text"

    }else{
      this.val="visibility_off"
      inp.type="password"
    }
  }
  

 

}

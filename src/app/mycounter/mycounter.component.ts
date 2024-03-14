import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import {  addStudent,deleteStudent} from '../counter.actions';
import { Student } from '../Student.model';
import { AppState } from '../app.state';
import { StudentState } from '../counter.reducers';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mycounter',
  templateUrl: './mycounter.component.html',
  styleUrls: ['./mycounter.component.css']
})
export class MycounterComponent implements OnInit{
  students$:Observable<StudentState>;

  reqid:number=0;

  adding:boolean=true;

  deleting:boolean=true;

  temp:any;
  student:Student={
    name:'',
    age:0,
    id:0,
    marks:0
  };
  leng:number=0;

  studentForm!:FormGroup;
  idForm!:FormGroup;

  constructor(private store:Store<{students:StudentState}>){
    this.students$=store.select('students');

    this.studentForm=new FormGroup({
      name:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      id:new FormControl('',Validators.required),
      marks:new FormControl('',Validators.required)
    })

    this.idForm=new FormGroup({
      id:new FormControl('',Validators.required)
    })
  }

  ngOnInit(){

  }
  increment(){
    this.student.name=this.studentForm.get('name')?.value;
    this.student.age=this.studentForm.get('age')?.value;
    this.student.id=this.studentForm.get('id')?.value;
    this.student.marks=this.studentForm.get('marks')?.value;
    this.store.dispatch(addStudent({name:this.student.name,id:this.student.id,age:this.student.age,marks:this.student.marks}));
  }

  decrement(id:number){
    this.reqid=this.idForm.get('id')?.value;
    this.store.dispatch(deleteStudent({id:this.reqid}));
  }


}

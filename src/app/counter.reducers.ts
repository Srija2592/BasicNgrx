import { createReducer, on } from "@ngrx/store";
import {  addStudent, deleteStudent} from "./counter.actions";
import { Student } from "./Student.model";
import * as StudentActions from '../app/counter.actions';

export interface StudentState{
  students:Student[];
}

export const initialState:StudentState={
students:[{
  name:'Srija',
  age:23,
  id:1,
  marks:0
}]
};
export const counterReducer=createReducer(
  initialState,
  on(StudentActions.addStudent,(state,{name,id,age,marks})=>
     ({...state,students:[...state.students,{name:name,id:id,age:age,marks:marks}]})),
  on(StudentActions.deleteStudent,(state,{id})=>
     ({...state,students:[...state.students.filter((student)=>id!=student.id)]}))
)

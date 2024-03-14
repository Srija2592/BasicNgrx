import { createAction, props } from "@ngrx/store";
import { Student } from "./Student.model";

export const addStudent=createAction('[Student Page] Add',props<{name:string,id:number,age:number,marks:number}>());
export const deleteStudent=createAction('[Student Page] Delete',props<{id:number}>());

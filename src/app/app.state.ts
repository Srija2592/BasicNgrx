import { Student } from "./Student.model";
import { StudentState } from "./counter.reducers";

export interface AppState{
  students:StudentState;
}

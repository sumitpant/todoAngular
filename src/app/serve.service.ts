import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';
import {Task} from './model/task'



@Injectable({
  providedIn: 'root'
})
export class ServeService {

  private task :Task[] = [];

  private $task2 =new Subject<Task[]>();
  

  constructor() { }


public getAllTodos():Subject<Task[]> {
  return this.$task2
}

public createNewTask(task: Task): string{
   this.task =[...this.task,task]
  this.$task2.next(this.task);
  return `${task.name} created`

}

public deleteATask(task: string){
  let index =this.task.findIndex(data =>data.name ===task);
  if(index > -1){
    this.task.splice(index,1);
    this.$task2.next(this.task);
  }

}
public updateATask(task:string){
  let index=  this.task.findIndex((data)=>data.name===task);
  if(index > -1){
    this.task.splice(index,1 ,{name:task ,done: true});
    this.$task2.next(this.task);
  }

}














  // private cloneTasks()  {
  //   return JSON.parse(JSON.stringify(this.task));
  // }
    
  // public getTodos() : Observable<Task[]> {
  //   return this.$task2;
  //  // return of(this.cloneTasks())
  // } 
  // public createTask ( todo:Task):string{
  //     this.task.push(todo);
  //     return `${todo.name} created`;
  // }
  // public deleteTask(task:string):Observable<Task[]>{
  //  let index=  this.task.findIndex((data)=>data.name===task);
  //  if(index ==-1){
  //    return of(this.cloneTasks());
  //  }
  //  else{
  //     this.task.splice(index,1);
  //    return  of(this.cloneTasks());
  //  }
  // }
  // public updateTask(task :string) :Observable<Task[]>{

  //   let index=  this.task.findIndex((data)=>data.name===task);
  //   if(index ==-1){
  //     return  of(this.cloneTasks());;
  //   }
  //   else{
  //     this.task.splice(index,1 ,{name:task ,done:true});

  //     return of(this.cloneTasks());
  //   }
  // }

}

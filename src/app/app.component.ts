import { Component, OnInit } from '@angular/core';
import { ServeService } from './serve.service';
import {Task} from './model/task'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  task:string ="";
  done: boolean = false;
  message: string ="";
  tasks :Task[]=[];

  constructor(private serv : ServeService ,private _snackBar: MatSnackBar ){}

  ngOnInit(): void {

    this.serv.getAllTodos().subscribe(data=>{this.tasks = data});
  }

  public createTask(){
   this.message = this.serv.createNewTask({name:this.task,done:this.done});
   this.task ="";
   this.openSnackBar(this.message ,"Ok");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action ,{
      duration: 3000
    });
  }

}

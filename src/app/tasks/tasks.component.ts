import { Component,  ElementRef,  OnInit, Output, ViewChild ,EventEmitter } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent  {
  
  @ViewChild('items') items: ElementRef | undefined ;
 
  constructor(private serv:ServeService ) { }


  public deleteTask(){
     let task =this.items?.nativeElement.children[0].textContent;
     this.serv.deleteATask(task);
    
  }
  public completeTask(){
    let task =this.items?.nativeElement.children[0].textContent;
    this.serv.updateATask(task);

  }

}

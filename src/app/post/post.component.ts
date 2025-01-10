
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [FormsModule,CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  // this will receive data from parent, so we have used @Input() at the start of the variable
  @Input() titlePostApp:string='';

  @Input() postListData:Array<string>=[]; 

  @Input() postIsUserLogin:boolean=false;

  childMessage:string="Hi this is message from child component";
  rollNo:number=101;

  // through this you can send data to parent
  @Output() MessageEvent=new EventEmitter();
  //send data to parent through EventEmitter
  msgToServer:string="send data to parent from child";
  sendDataToParent(){
    this.MessageEvent.emit(this.msgToServer);
  }
}

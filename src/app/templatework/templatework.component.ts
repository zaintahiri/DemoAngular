import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-templatework',
  imports: [FormsModule,CommonModule,NgTemplateOutlet],
  templateUrl: './templatework.component.html',
  styleUrl: './templatework.component.css'
})
export class TemplateworkComponent {

  // username:string="";
  // showData:Array<string>=new Array<string>();
  // Add(){
  //   this.showData.push(this.username);
  //   this.username="";
  // }

  id:number=0;
  username:string="";
  showData:Array<any>=[];
  Add(){
    this.id++;
    let user={id:this.id,username:this.username}
    this.showData.push(user);
    this.username="";
  }

  delete(r:object){
    let index=this.showData.indexOf(r);
    this.showData.splice(index,1);
  }

  deleteWithIndex(index:number){
    this.showData.splice(index,1);
  }


  userRole:string="abc";
}

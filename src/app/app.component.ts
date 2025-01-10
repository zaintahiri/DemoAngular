import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { TemplateworkComponent } from './templatework/templatework.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  // imports: [FormsModule,CommonModule,AppNavbar,HeaderComponent,TemplateworkComponent],
  imports: [FormsModule,CommonModule,PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'Demo Angular';

//how to send data from parent component to child component
   appTitle:string="Title"
   posts:Array<string>=["zain","ali","asad","naeem"];
   isUserLogin:boolean=false;

   // this is used to receive data from child component to parent
   @ViewChild(PostComponent) childMessage:any;
   isChildFullyInitialized:boolean=false;

   constructor(){
    // checking the data from parent
    // alert(this.childMessage);
   }
  ngAfterViewInit(): void {
    // checking the data from child once parent view is fully initialized.
    // alert(this.childMessage);
    this.isChildFullyInitialized=true;
  }
   sendData()
   {
      this.posts=["zain","ali","asad","naeem"];
      this.isUserLogin=true;
   }

   // receive data from child using event
   receiveDataFromChild(message:string){
    alert(message);
   }





  // isDisabled:boolean=true;
  // isActive:boolean=false;
  // fruitName:string='Orange';
  // ChangeStatus(){
  //   this.isActive=!this.isActive;
  // }

  // username:string="";
  // dataList:Array<string> =new Array<string>();
  // KeyEnterPressed(){
  //   this.dataList.push(this.username);
  //   this.username="";
  // }

  // KenyEnterTemplatebinding(user:HTMLInputElement){
  //   alert("User is : "+user.value+",Id is :"+user.id);
  // }

  // isUserLogin:boolean=false;

  // loginCount:number=0;
  // LoginCountAttempt(){
  //   this.loginCount++;
  // }
}

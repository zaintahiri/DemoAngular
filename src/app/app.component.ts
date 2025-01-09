import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule,AppNavbar,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo Angular';
  isDisabled:boolean=true;
  isActive:boolean=false;
  fruitName:string='Orange';
  ChangeStatus(){
    this.isActive=!this.isActive;
  }

  username:string="";
  dataList:Array<string> =new Array<string>();
  KeyEnterPressed(){
    this.dataList.push(this.username);
    this.username="";
  }

  KenyEnterTemplatebinding(user:HTMLInputElement){
    alert("User is : "+user.value+",Id is :"+user.id);
  }

  isUserLogin:boolean=false;
}

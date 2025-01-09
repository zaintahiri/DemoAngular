// this is standalone navbar
import { Component } from "@angular/core";

// here we are creating compnent
// there are three main things with component (logic, template as html, and css)
@Component({
    // this is selector which will be used as tag name
    selector:'app-navbar',
    // this is we are making component as standalone, it will not dependent on the modules
    standalone:true,
    // template:`<h1> this is navbar component</h1>
    //            <p>This is dummy paragraph using navbar angular</p>
    //            <p>This is paragraph two</p>`,
    // styles:`h1{color:red;background-color:grey} 
    //         p{font-size:20px;color:green;}
    //     `,
        templateUrl:'./navbar.component.html',
        styleUrl:'./navbar.component.css'
})

// this is class that will work as login
export class AppNavbar{}
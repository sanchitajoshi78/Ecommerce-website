// import { Component} from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ProductsComponent } from '../products/products.component';
// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports:  [FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   loginObj: any ={
//     userName:'', 
//     password:'',

//   };
//   constructor(private router: Router){
//   }
//   onLogin(){
//     if(this.loginObj.userName == "admin" && this.loginObj.password=="334455"){
//   this.router.navigateByUrl("/products")
// }else{
//   alert("Invalid Credentials")
// }
  
//   }
// }



import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Import FormsModule to use ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    userName: '',
    password: '',
  };

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginObj.userName === 'admin' && this.loginObj.password === '334455') {
      this.router.navigateByUrl('/products');
    } else {
      alert('Invalid Credentials');
    }
  }
}

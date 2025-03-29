// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//    templateUrl: './app.component.html',
//   template:'Welcome to Angular',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'my-app';
// }


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], // Ensures RouterOutlet is imported for routing
  templateUrl: './app.component.html', // Link to the HTML template
  styleUrls: ['./app.component.scss'], // Link to the SCSS styles
})
export class AppComponent {
  title = 'my-app'; // The title of your app
}

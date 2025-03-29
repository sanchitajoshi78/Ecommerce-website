// // import { CommonModule } from "@angular/common";
// // import { Component, OnInit } from "@angular/core";
// // import { FormsModule } from "@angular/forms";
// // import { ProductService } from "../../../services/product/product.service";

// // @Component({
// //     selector: 'app-products',
// //     standalone: true,
// //     imports: [CommonModule, FormsModule],
// //     templateUrl: './products.component.html',
// //     styleUrl: './products.component.scss'
// //   })
// //   export class ProductsComponent implements OnInit{
  
  
// //     isSidePanelVisible: boolean = false;
// //     productObj: any = {
// //       "productId": 0,
// //       "productSku": "",
// //       "productName": "",
// //       "productPrice": 0,
// //       "productShortName": "",
// //       "productDescription": "",
// //       "createDate": new Date(),
// //       "deliveryTimeSpan": "",
// //       "categoryId": 0,
// //       "productImageUrl": "",
// //       "categoryName":""
// //     };
  
// //     categoryList: any[] = [];
// //     productsList: any[] = [];
// //     constructor(private productSrv: ProductService) { }
  
// //     ngOnInit(): void {
// //       this.getProducts();
// //       this.getAllCategory();
// //     }
  
// //     getProducts() {
// //       this.productSrv.getProducts().subscribe((res: any) => {
// //         this.productsList = res.data;
// //       });
// //     }
  
// //     getAllCategory() {
// //       this.productSrv.getCategory().subscribe((res: any) => {
// //         this.categoryList = res.data;
// //       })
// //     }
// //     onSave() {
// //       this.productSrv.saveProduct(this.productObj).subscribe((res: any) => {
// //         debugger;
// //         if (res.result) {
// //           alert("Product Craeted");
// //           this.getProducts();
// //         } else {
// //           alert(res.message);
// //         }
// //       });
// //     }
// //     openSidePanel() {
// //       this.isSidePanelVisible = true;
// //     }
  
// //     closeSidePanel() {
// //       this.isSidePanelVisible = false;
// //     }
// //   }
  
  


// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ProductService } from '../../../services/product/product.service';

// @Component({
//   selector: 'app-products',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.scss'],
// })
// export class ProductsComponent implements OnInit {
//   isSidePanelVisible: boolean = false;
//   productObj: any = {
//     productId: 0,
//     productSku: '',
//     productName: '',
//     productPrice: 0,
//     productShortName: '',
//     productDescription: '',
//     createDate: new Date(),
//     deliveryTimeSpan: '',
//     categoryId: 0, // The ID of the selected category
//     productImageUrl: '',
//     categoryName: '', // The name of the selected category (not necessary for the save)
//   };

//   categoryList: any[] = [];
//   productsList: any[] = [];

//   constructor(private productSrv: ProductService) {}

//   ngOnInit(): void {
//     this.getProducts();
//     this.getAllCategory(); // Get all categories when the component is initialized
//   }

//   getProducts() {
//     this.productSrv.getProducts().subscribe((res: any) => {
//       this.productsList = res.data;
//     });
//   }

//   getAllCategory() {
//     this.productSrv.getCategory().subscribe((res: any) => {
//       this.categoryList = res.data; // Populate the category list with the response
//     });
//   }

//   onSave() {
//     this.productSrv.saveProduct(this.productObj).subscribe((res: any) => {
//       if (res.result) {
//         alert('Product Created');
//         this.getProducts();
//       } else {
//         alert(res.message);
//       }
//     });
//   }

//   openSidePanel() {
//     this.isSidePanelVisible = true;
//   }

//   closeSidePanel() {
//     this.isSidePanelVisible = false;
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import required modules
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean = false;
  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
    productImageUrl: '',
    categoryName: '',
  };

  categoryList: any[] = [];
  productsList: any[] = [];

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
  }

  getProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      this.productsList = res.data;
    });
  }

  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  onSave() {
    this.productSrv.saveProduct(this.productObj).subscribe((res: any) => {
      if (res.result) {
        alert('Product Created');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  mallForm: FormGroup;
  mallFormName: any;
  mall: any;

  constructor(private formBuilder: FormBuilder,private router: Router) {}


  ngOnInit(){
    this.mallForm = this.formBuilder.group({
      mallName: ['', [Validators.required]]
    });
  }

  // getMallService(){
  //   console.log("Button is pressed");
  //   this.mallFormName = this.mallForm.value.mallName.toUpperCase( );
  //   this.mallService.getMall(this.mallFormName).subscribe(
  //     response => {
  //       console.log(response)   
  //       this.mall = response;
  //       this.router.navigate(['/shop-search']);
  //     },
  //     err => {
  //       console.log(err);
  //     },
  //     () => {
  //       console.log('done loading api');
  //     }
      
  //   );
  // }

  queryMall(){
    this.mallFormName = this.mallForm.value.mallName.toUpperCase( );
    let navigationExtras: NavigationExtras = {
      queryParams: {
        mall: JSON.stringify(this.mallFormName)
      }
    };
    this.router.navigate(['shop-search'], navigationExtras);
  }


}

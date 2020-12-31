import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MallService } from '../services/mall.service';


@Component({
  selector: 'app-shop-search',
  templateUrl: './shop-search.page.html',
  styleUrls: ['./shop-search.page.scss'],
})
export class ShopSearchPage implements OnInit {
  shopForm: FormGroup;
  mall: any;
  data: any;
  path: any;
  source: any;
  destination: any;

  constructor(private route: ActivatedRoute, private router: Router,private mallService: MallService,private formBuilder: FormBuilder) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.mall) {
        this.data = JSON.parse(params.mall);
      }
    });
  }

  ngOnInit() {
    this.shopForm = this.formBuilder.group({
      source: ['', [Validators.required]],
      destination: ['', [Validators.required]]
    });
    console.log(this.data);
    this.getMallService();
  }

  getMallService(){
    console.log("Button is pressed");
    this.mallService.getMall(this.data).subscribe(
      response => {   
        this.mall = response;
        // console.log(this.mall[0].mall[0].nav_list[0]["LYSHA FLORA to MINT COBBLER"])
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('done loading api');
      }
      
    );
  }

  queryShop(){
    // this.path = this.mall[0].mall[0].nav_list[0]["LYSHA FLORA to MINT COBBLER"];
    this.source = this.shopForm.value.source.toUpperCase();
    this.destination = this.shopForm.value.destination.toUpperCase();
    console.log(this.source);
    console.log(this.destination);
    this.originToDestination(this.source, this.destination);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        path: JSON.stringify(this.path)
      }
    };
    this.router.navigate(['navigation'], navigationExtras);
  }

  originToDestination(source, destination){
    this.path = this.mall[0].mall[0].nav_list[0][source + " to " + destination];
    // console.log(this.path);
  }

}

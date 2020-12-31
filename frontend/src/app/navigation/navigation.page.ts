import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.path) {
        this.data = JSON.parse(params.path);
      }
    });
  }

  ngOnInit() {
    console.log(this.data)
  }

}

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {
  @ViewChild('canvas', { static:true })

  canvas : ElementRef<HTMLCanvasElement>;

  private context: CanvasRenderingContext2D;

  data: any;

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.path) {
        this.data = JSON.parse(params.path);
      }
    });
  }

  ngOnInit() {
    console.log(this.data);
    this.context = this.canvas.nativeElement.getContext('2d');
    let base_image = new Image();
      base_image.src = "https://www.sleeplessinkl.my/wp-content/uploads/2009/04/suriaconcoursemap.jpg";
    // base_image.src = "../assets/suriaconcoursemap.png";
    base_image.onload = () => {
      this.context.drawImage(base_image, 0, 0, 1250, 550);   
      for(let x=0;x<this.data.length;x++){
        this.context.fillStyle = 'red';  
        this.context.fillRect(this.data[x][1]*10,this.data[x][0]*10, 10,10 );     
      }    
    }

    
  }



}

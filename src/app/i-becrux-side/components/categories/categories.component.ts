import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input('type') type;
//for product slider after banner
sliderConfig = {
  slidesPerView: 2.5,
  spaceBetween: 0
}
sliderConfigHomeSix = {
  slidesPerView: 2.2,
  spaceBetween: 0
}
// For products
public categories: any = [1, 1, 1, 1, 1, 1 ];
  constructor( public config: ConfigService, public shared: SharedDataService,public nav:NavController ) {
    setTimeout(() => {
      this.categories = [
       { name: "Tops", img: "assets/template-themes/becrux/images/category-images/1.jpg", count: "2" },
       { name: "Bottoms", img: "assets/template-themes/becrux/images/category-images/2.jpg", count: "3" },
       { name: "Shirts", img: "assets/template-themes/becrux/images/category-images/3.jpg", count: "2" },
       { name: "Winter Wear", img: "assets/template-themes/becrux/images/category-images/4.jpg", count: "2" },
       { name: "Shoes", img: "assets/template-themes/becrux/images/category-images/5.jpg",  count: "2" },
       { name: "Watches", img: "assets/template-themes/becrux/images/category-images/6.jpg", count: "2" },
     ];
    }, 4000);
  }
  goToSubCategories(){
    this.nav.navigateForward("bs-products");
  }
  ngOnInit() {}
  
}

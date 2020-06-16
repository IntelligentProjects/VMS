import { ToastController, AlertController } from '@ionic/angular';
import { VehiclesService } from '../services/vehicles.service';
import { Component, OnInit } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';


@Component({
  selector: 'app-book-service',
  templateUrl: './my-vehicles.page.html',
  styleUrls: ['./my-vehicles.page.scss'],
})
export class MyVehiclesPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data:any;
  catDta: any = [];

  constructor(private service: CustomThemeService, private vehiclesService: VehiclesService,public toastCtrl: ToastController,public alertcntl: AlertController) {
    this.itemColor = ["#F44336"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    //for the selection of colors
    if (this.data == "autumn")//if selected color is red 
    {
      this.itemColor = ["#F44336"];
    }
    else if (this.data == "night")//if selected color is purple 
    {
      this.itemColor = ["#673AB7"];
    }
    else if (this.data == "neon")//if selected color is blue 
    {
      this.itemColor = ["#03A9F4"];
    }
    else if (this.data == "orginal")//if selected color is green
    {
      this.itemColor = ["#4CAF50"];
    }
    else if (this.data == "red")//if selected color is gray
    {
      this.itemColor = ["#9E9E9E"];
    }
    else if (this.data == "purple")//if selected color is sharp pink
    {
      this.itemColor = ["#E91E63"];
    }
    else if (this.data == "Lightblue")//if selected color is dark blue
    {
      this.itemColor = ["#3F51B5"];
    }
    else if (this.data == "Lightgreen")//if selected color is light blue
    {
      this.itemColor = ["#00BCD4"];
    }
    else if (this.data == "Lightgray")//if selected color is light green
    {
      this.itemColor = ["#8BC34A"];
    }
    else if (this.data == "blue")//if selected color is dark green 
    {
      this.itemColor = ["#008577"];
    }
   }

  ngOnInit() {
    this.myVehicles();
  }

  myVehicles()
  {
    const json=this.vehiclesService.myvehicles(8);
    json.subscribe(data => {
      console.log("dataa",data['vehicles_data'][0]['make']);
      this.catDta = data['vehicles_data'];
      //this.presentToast("successfully added your vehicle");
    },
    error => {
      this.presentToast("something went wrong!!");
    });
  }

  async presentAlert(messagevalue) {
    const alert = await this.alertcntl.create({
    message: messagevalue,
    subHeader: 'Alert!!',
    buttons: ['Dismiss']
   });
   await alert.present(); 
}

   async presentToast(messagevalue) {
    let t = this.toastCtrl.create({
      header: messagevalue,
      position: 'bottom',
      cssClass: 'toast_style',
      buttons: [
        {
          // side: 'start',
          // icon: 'star',
          // text: 'Fav',
          // handler: () => {
          //   console.log('Favorite clicked');
          // }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }

}

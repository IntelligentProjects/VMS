import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ToastController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  formData = {
    customers_email_address: '',
  };
  errorMessage = '';
  //The Email not Valid exist

  constructor(private modalCtrl: ModalController, public appEventsService: AppEventsService,
    private toastCtrl: ToastController,
    private nav: NavController,
    translate: TranslateService,
    public menuCtrl: MenuController) { }

  dismiss() {
    this.nav.navigateForward("bb-login");
  }
  ngOnInit() {
  }
  pinchEvent(e) {
    this.appEventsService.publish('b_bottom', true);
    //this.colorService.setTheme(undefined);
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }
}

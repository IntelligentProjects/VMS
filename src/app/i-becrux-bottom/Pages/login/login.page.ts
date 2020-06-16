import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SignUpPage } from '../sign-up/sign-up.page';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formData = {
    username: '',
    password: ''
  };
  //Invalid username or password.
  errorMessage = 'Invalid username or password.';

  ngOnInit() { }
  constructor(private modalCtrl: ModalController,public appEventsService: AppEventsService,
    private toastCtrl: ToastController,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public translate: TranslateService,
    public AppEventsService: AppEventsService
  ) {
  }
  /*function to move back to main menu*/
  dismiss() {
    this.navCtrl.navigateForward("bb-home");
  }

  async loginwithFacebook() {
    const toast = await this.toastCtrl.create({
      message: 'Facebook login button Clicked',
      position: 'bottom',
      duration: 1000
    });
    toast.present();
  }
  async loginWithGoogle() {
    const toast = await this.toastCtrl.create({
      message: 'Google login button Clicked',
      position: 'bottom',
      duration: 1000
    });
    toast.present();
  }

  async goToSignUp() {
    this.navCtrl.navigateForward("bb-sign-up");
  }
  async goToForgot() {
    this.navCtrl.navigateForward("bb-forgot-password");
  }

  pinchEvent(e) {
    this.AppEventsService.publish('b_bottom', true);
    //this.colorService.setTheme(undefined);
    this.navCtrl.navigateForward("ui-templates-details");  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }
}

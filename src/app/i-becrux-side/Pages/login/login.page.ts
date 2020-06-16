import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SignUpPage } from '../sign-up/sign-up.page';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';

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
  constructor(private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    translate: TranslateService
  ) {
  }
  /*function to move back to main menu*/
  dismiss() {
    this.navCtrl.navigateForward("bs-home");
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
   goToSignUp() {
    this.navCtrl.navigateForward("bs-sign-up");
  }
   goToForgot() {
    this.navCtrl.navigateForward("bs-forgot-password");
  }
  pinchEvent(e) {
    this.navCtrl.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }
}

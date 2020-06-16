import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RefundPolicyPage } from '../refund-policy/refund-policy.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { TermServicesPage } from '../term-services/term-services.page';



@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

    formData = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        username: '',
        wpgdprc: 1,
        register: 'Register'
    };
    image;
    errorMessage = 'Invalid username or password.';
    //Invalid username or password.
    constructor(private modalCtrl: ModalController,
        // private camera: Camera,
        private toastCtrl: ToastController,
        translate: TranslateService,
        private navCtrl: NavController,
        public menuCtrl: MenuController) {

    }
    /*go back to login page*/
    dismiss() {
        this.navCtrl.navigateForward("bs-login");
    }

    // openCamera()
    // {
    // const options: CameraOptions = {
    // quality: 100,
    // destinationType: this.camera.DestinationType.FILE_URI,
    // encodingType: this.camera.EncodingType.JPEG,
    // mediaType: this.camera.MediaType.PICTURE
    // }

    // this.camera.getPicture(options).then((imageData) => {
    // // imageData is either a base64 encoded string or a file URI
    // // If it's base64 (DATA_URL):
    // let base64Image = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    // // Handle error
    // });
    // }
    async goToTermServicesPage() {
        const toast = await this.toastCtrl.create({
            message: 'Term and Service Clicked',
            position: 'bottom',
            duration: 1000
        });
        toast.present();
    }
    async goToPrivacyPolicyPage() {
        const toast = await this.toastCtrl.create({
            message: 'Privacy Policy Clicked',
            position: 'bottom',
            duration: 1000
        });
        toast.present();
    }
    async goToRefundPolicyPage() {
        const toast = await this.toastCtrl.create({
            message: 'Fund Policy Clicked',
            position: 'bottom',
            duration: 1000
        });
        toast.present();
    }
    ngOnInit() {
    }
    async openTermServicesPage() {
        const modal = await this.modalCtrl.create({
            component: TermServicesPage
        });
        return await modal.present();
    }
    async openPrivacyPolicyPage() {
        const modal = await this.modalCtrl.create({
            component: PrivacyPolicyPage
        });
        return await modal.present();
    }
    async openRefundPolicyPage() {
        const modal = await this.modalCtrl.create({
            component: RefundPolicyPage
        });
        return await modal.present();
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
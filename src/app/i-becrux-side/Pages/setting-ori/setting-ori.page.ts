import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController, ModalController, MenuController, ToastController } from '@ionic/angular';
import { RefundPolicyPage } from '../refund-policy/refund-policy.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { TermServicesPage } from '../term-services/term-services.page';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
    selector: 'app-setting-ori',
    templateUrl: './setting-ori.page.html',
    styleUrls: ['./setting-ori.page.scss'],
})
export class SettingOriPage implements OnInit {
    public itemColor = [];
    public iconColorVar = "";
    data: any;
    constructor(public toastController: ToastController, private service: CustomThemeService, public menuCtrl: MenuController,
        public nav: NavController, public modalCtrl: ModalController, private elementRef: ElementRef) {
        this.itemColor = ["black"];//to get the coloe from custom-theme service
        this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
        this.iconColorVar = this.data;
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        //for the selection of colors
        if (this.data == "black")//if selected color is black 
        {
            this.itemColor = ["black"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "red")//if selected color is red 
        {
            this.itemColor = ["#F44336"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "green")//if selected color is green 
        {
            this.itemColor = ["#4CAF50"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "blue")//if selected color is blue
        {
            this.itemColor = ["#008577"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "gray")//if selected color is gray
        {
            this.itemColor = ["#9E9E9E"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
    }
    ngOnInit() {
    }
    openAddAccountPage() {
        this.nav.navigateForward("my-account");
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
    goToSearchPage() {
        this.nav.navigateForward("bs-search");
    }
    goToCartPage() {
        this.nav.navigateForward("bs-cart");
    }
    async officiaWebSite() {
        const toast = await this.toastController.create({
            message: 'Official Website Clicked',
            duration: 2000
        });
        toast.present();
    }
    async rateUs() {
        const toast = await this.toastController.create({
            message: 'Rate Us Clicked',
            duration: 2000
        });
        toast.present();
    }
    async share() {
        const toast = await this.toastController.create({
            message: 'Share Clicked',
            duration: 2000
        });
        toast.present();
    }
    pinchEvent(e) {
        this.nav.navigateForward("ui-templates-details");
    }
    ionViewWillEnter() {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    }
}
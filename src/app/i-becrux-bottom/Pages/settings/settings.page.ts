import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, MenuController, ToastController } from '@ionic/angular';
import { RefundPolicyPage } from '../refund-policy/refund-policy.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { TermServicesPage } from '../term-services/term-services.page';
import { LanguagePage } from '../language/language.page';
import { CurrencyListPage } from '../currency-list/currency-list.page';
import { LoginPage } from '../login/login.page';
import { CustomThemeService } from 'src/app/services/custom-theme.service';
import { ThemeService } from '../services/theme.service';
import { AppEventsService } from 'src/app/services/app-events.service';

// For Static Theme Apply
const themes = {
    undefined: {
        primary: '',
        secondary: '',
        tertiary: '',
        light: '',//background
        medium: '',//all btn color
        dark: '',//text color
        warning: ''
    }
};
@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    itemList = [
        { name: "Login", icon: "assets/custom-icon-tc-shop/login.svg" },
        { name: "Edit Profile", icon: "assets/custom-icon-tc-shop/person.svg" },
        { name: "My Order", icon: "assets/custom-icon-tc-shop/order.svg" },
        { name: "My Address", icon: "assets/custom-icon-tc-shop/gps-fixed.svg" },
        { name: "Reward Points", icon: "assets/custom-icon-tc-shop/modal.svg" },
        { name: "Scracth Cards", icon: "assets/custom-icon-tc-shop/scratch.svg" },
        { name: "Sign Out", icon: "assets/custom-icon-tc-shop/sign-out.svg" },
    ]
    itemListTwo = [
        { name: "About Us", icon: "assets/custom-icon-tc-shop/about-us.svg" },
        { name: "Intro", icon: "assets/custom-icon-tc-shop/ionic.svg" },
        { name: "Contact Us", icon: "assets/custom-icon-tc-shop/support.svg" },
        { name: "Rate Us", icon: "assets/custom-icon-tc-shop/half-filled-rating-star.svg" },
        { name: "Settings", icon: "assets/custom-icon-tc-shop/half-filled-rating-star.svg" },
        { name: "Share", icon: "assets/custom-icon-tc-shop/share.svg" },
    ]
    constructor(public menuCtrl: MenuController,
        public nav: NavController, public appEventsService: AppEventsService, public modalCtrl: ModalController, public toastController: ToastController, private cTheme: CustomThemeService,
        public colorService: ThemeService) { }
    ngOnInit() {
    }
    openAddAccountPage() {
        this.nav.navigateForward("bb-my-account");
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
        this.nav.navigateForward("search");
    }
    goToCartPage() {
        this.nav.navigateForward("cart");
    }
    async goToLanguage() {
        let modal = await this.modalCtrl.create({
            component: LanguagePage,
        });
        return await modal.present();
    }
    async goToCurrencyListPage() {
        let modal = await this.modalCtrl.create({
            component: CurrencyListPage,
        });
        return await modal.present();
    }
    async goToitemLIst(i) {
        if (i == 0) {
            this.nav.navigateForward("bb-login");
        }
        if (i == 1) {
            this.nav.navigateForward("bb-my-account");
        }
        else if (i == 2) {
            this.nav.navigateForward("bb-my-orders");
        }
        else if (i == 3) {
            this.nav.navigateForward("bb-addresses");
        }
        else if (i == 4) {
            this.nav.navigateForward("bb-reward-points");
        }
        else if (i == 5) {
            this.nav.navigateForward("bb-notifications");
        }
        else if (i == 6) {
            this.signOut("bb-signout");
        }
    }
    goToitemLIstTwo(i) {
        if (i == 0) {
            this.nav.navigateForward("bb-about-us");
        }
        else if (i == 1) {
            this.nav.navigateForward("bb-intro");
        }
        else if (i == 2) {
            this.nav.navigateForward("bb-contact-us");
        }
        else if (i == 3) {
            this.signOut("bb-rateus");
        }
        else if (i == 4) {
            this.nav.navigateForward("bb-setting-ori");
        }
        else if (i == 5) {
            this.signOut("bb-share");
        }
    }
    async signOut(value) {
        if (value == "signout") {
            const toast = await this.toastController.create({
                message: 'Sign Out Clicked',
                duration: 2000
            });
            toast.present();
        }
        else if (value == "rateus") {
            const toast = await this.toastController.create({
                message: 'Rate Us Clicked',
                duration: 2000
            });
            toast.present();
        }
        else if (value == "share") {
            const toast = await this.toastController.create({
                message: 'Share Clicked',
                duration: 2000
            });
            toast.present();
        }
    }
    pinchEvent(e) {
        this.appEventsService.publish('b_bottom', true);
        //this.colorService.setTheme(undefined);
        this.nav.navigateForward("ui-templates-details");
    }
    exit() {
        this.colorService.setTheme(themes[0], 'undefined');
        this.appEventsService.publish('b_bottom', true);
        this.nav.navigateForward("ui-templates-details");
    }
    ionViewWillEnter() {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    }
}
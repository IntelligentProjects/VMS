import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-multipurpose-screens-details',
  templateUrl: './multipurpose-screens-details.page.html',
  styleUrls: ['./multipurpose-screens-details.page.scss'],
})
export class MultipurposeScreensDetailsPage implements OnInit {
  // For Multipurpose Screen Content
  public itemsScreen: any = [];

  public screens = [
    {
      category: 'Ecommerce Homes',
      Number: 12,
      expand: false,
      subCat: [
        { name: 'Home 01', url: '/home-one' },
        { name: 'Home 02', url: '/home-two' },
        { name: 'Home 03', url: '/home-three' },
        { name: 'Home 04', url: '/home-four' },
        { name: 'Home 05', url: '/home-five' },
        { name: 'Home 06', url: '/home-six' },
        { name: 'Home 07', url: '/home-seven' },
        { name: 'Home 08', url: '/home-eight' },
        { name: 'Home 09', url: '/home-nine' },
        { name: 'Home 10', url: '/home-ten' },
        { name: 'Home 11', url: '/home-eleven' },
        { name: 'Home 12', url: '/home-twelve' },
      ]
    },
    {
      category: 'Product Categories',
      Number: 7,
      expand: false,
      subCat: [
        { name: 'Category 01', url: '/categories-one' },
        { name: 'Category 02', url: '/categories-two' },
        { name: 'Category 03', url: '/categories-three' },
        { name: 'Category 04', url: '/categories-four' },
        { name: 'Category 05', url: '/categories-five' },
        { name: 'Category 06', url: '/categories-six' },
        { name: 'Category 07', url: '/categories-seven' }
      ]
    },
    {
      category: 'Sign In',
      Number: 14,
      expand: false,
      subCat: [
        { name: 'SignIn 01', url: '/form-login-one' },
        { name: 'SignIn 02', url: '/form-login-two' },
        { name: 'SignIn 03', url: '/form-login-three' },
        { name: 'SignIn 04', url: '/signin-one' },
        { name: 'SignIn 05', url: '/signin-two' },
        { name: 'SignIn 06', url: '/signin-three' },
        { name: 'SignIn 07', url: '/login-seven' },
        { name: 'SignIn 08', url: '/login-eight' },
        { name: 'SignIn 09', url: '/login-nine' },
        { name: 'SignIn 10', url: '/login-ten' },
        { name: 'SignIn 11', url: '/login-eleven' },
        { name: 'SignIn 12', url: '/login-twelve' },
        { name: 'SignIn 13', url: '/login-thirteen' },
        { name: 'SignIn 14', url: '/login-fourteen' }
      ]
    },
    {
      category: 'Sign Up',
      Number: 14,
      expand: false,
      subCat: [
        { name: 'SignUp 01', url: '/form-register-one' },
        { name: 'SignUp 02', url: '/form-register-two' },
        { name: 'SignUp 03', url: '/form-register-three' },
        { name: 'SignUp 04', url: '/signup-one' },
        { name: 'SignUp 05', url: '/signup-two' },
        { name: 'SignUp 06', url: '/signup-three' },
        { name: 'SignUp 07', url: '/register-seven' },
        { name: 'SignUp 08', url: '/register-eight' },
        { name: 'SignUp 09', url: '/register-nine' },
        { name: 'SignUp 10', url: '/register-ten' },
        { name: 'SignUp 11', url: '/register-eleven' },
        { name: 'SignUp 12', url: '/register-twelve' },
        { name: 'SignUp 13', url: '/register-thirteen' },
        { name: 'SignUp 14', url: '/register-fourteen' },
      ]
    },
    {
      category: 'Forgot Password',
      Number: 14,
      expand: false,
      subCat: [
        { name: 'Forgot Password 01', url: '/form-forget-one' },
        { name: 'Forgot Password 02', url: '/form-forget-two' },
        { name: 'Forgot Password 03', url: '/form-forget-three' },
        { name: 'Forgot Password 04', url: '/forgot-pass-one' },
        { name: 'Forgot Password 05', url: '/forgot-pass-two' },
        { name: 'Forgot Password 06', url: '/forget-pass-three' },
        { name: 'Forgot Password 07', url: '/forget-seven' },
        { name: 'Forgot Password 08', url: '/forget-eight' },
        { name: 'Forgot Password 09', url: '/forget-nine' },
        { name: 'Forgot Password 10', url: '/forget-ten' },
        { name: 'Forgot Password 11', url: '/forget-eleven' },
        { name: 'Forgot Password 12', url: '/forget-twelve' },
        { name: 'Forgot Password 13', url: '/forget-thirteen' },
        { name: 'Forgot Password 14', url: '/forget-fourteen' },
      ]
    },
    {
      category: 'Search',
      Number: 6,
      expand: false,
      subCat: [
        { name: 'Search 01', url: '/searchbar-simple' },
        { name: 'Search 02', url: '/searchbar-with-images' },
        { name: 'Search 03', url: '/search-one' },
        { name: 'Search 04', url: '/search-two' },
        { name: 'Search 05', url: '/search-five' },
        { name: 'Search 06', url: '/search-six' },
      ]
    },
    {
      category: 'Intros',
      Number: 4,
      expand: false,
      subCat: [
        { name: 'Intro 01', url: '/intro-one' },
        { name: 'Intro 02', url: '/intro-two' },
        { name: 'Intro 03', url: '/intro-three' },
        { name: 'Intro 04', url: '/intro-four' }
      ]
    },
    {
      category: 'Product Details',
      Number: 3,
      expand: false,
      subCat: [
        { name: 'Product Details 01', url: '/product-detail-one' },
        { name: 'Product Details 02', url: '/product-detail-two' },
        { name: 'Product Details 03', url: '/product-detail-three' }
      ]
    },
    {
      category: 'Carts',
      Number: 6,
      expand: false,
      subCat: [
        { name: 'Cart 01', url: '/cart-one' },
        { name: 'Cart 02', url: '/cart-two' },
        { name: 'Cart 03', url: '/cart-three' },
        { name: 'Cart 04', url: '/cart-four' },
        { name: 'Cart 05', url: '/cart-five' },
        { name: 'Cart 06', url: '/cart-six' },
      ]
    },
    {
      category: 'Orders Details',
      Number: 3,
      expand: false,
      subCat: [
        { name: 'Order 01', url: '/order-detail-one' },
        { name: 'Order 02', url: '/order-detail-two' },
        { name: 'Order 03', url: '/order-detail-three' }
      ]
    },
    {
      category: 'Wishlists',
      Number: 3,
      expand: false,
      subCat: [
        { name: 'Wishlist 01', url: '/wishlist-one' },
        { name: 'Wishlist 02', url: '/wishlist-two' },
        { name: 'Wishlist 03', url: '/wishlist-three' }
      ]
    },
    {
      category: 'ThankYou',
      Number: 3,
      expand: false,
      subCat: [
        { name: 'ThankYou 01', url: '/thankyou-one' },
        { name: 'ThankYou 02', url: '/thankyou-two' },
        { name: 'ThankYou 03', url: '/thankyou-three' }
      ]
    },
    {
      category: 'Shops',
      Number: 3,
      expand: false,
      subCat: [
        { name: 'Shop 01', url: '/shop-one' },
        { name: 'Shop 02', url: '/shop-two' },
        { name: 'Shop 03', url: '/shopping-three' },
      ]
    },
    {
      category: 'About Us',
      Number: 10,
      expand: false,
      subCat: [
        { name: 'About Us 01', url: '/aboutus-one' },
        { name: 'About Us 02', url: '/aboutus-two' },
        { name: 'About Us 03', url: '/aboutus-three' },
        { name: 'About Us 04', url: '/aboutus-four' },
        { name: 'About Us 05', url: '/aboutus-five' },
        { name: 'About Us 06', url: '/aboutus-six' },
        { name: 'About Us 07', url: '/aboutus-seven' },
        { name: 'About Us 08', url: '/aboutus-eight' },
        { name: 'About Us 09', url: '/aboutus-nine' },
        { name: 'About Us 10', url: '/aboutus-ten' },
      ]
    },
    {
      category: 'News',
      Number: 2,
      expand: false,
      subCat: [
        { name: 'News 01', url: '/news-one' },
        // { name: 'News 02', url: '/news-two' },
        { name: 'News 02', url: '/news-three' },
      ]
    },
    {
      category: 'Payment Methods',
      Number: 1,
      expand: false,
      subCat: [
        { name: 'Payment Methods 01', url: '/payment-one' },
        // { name: 'Payment Methods 02', url: '/payment-two' },
      ]
    },
    {
      category: 'profiles',
      Number: 2,
      expand: false,
      subCat: [
        { name: 'profile 01', url: '/profile-one' },
        { name: 'profile 02', url: '/profile-two' },
      ]
    },
    {
      category: 'Settings',
      Number: 1,
      expand: false,
      subCat: [
        { name: 'Setting 01', url: '/setting-one' },
      ]
    },
    {
      category: 'Verifications',
      Number: 8,
      expand: false,
      subCat: [
        { name: 'Verification 01', url: '/verification-one' },
        // { name: 'Verification 02', url: '/verification-two' },
        { name: 'Verification 02', url: '/verification-three' },
        { name: 'Verification 03', url: '/verification-four' },
        { name: 'Verification 04', url: '/verification-five' },
        { name: 'Verification 05', url: '/verification-six' },
        { name: 'Verification 06', url: '/verification-seven' },
        { name: 'Verification 07', url: '/verification-eight' },
        { name: 'Verification 08', url: '/verification-nine' },
        // { name: 'Verification 10', url: '/verification-ten' },
      ]
    },
    {
      category: 'Timelines',
      Number: 1,
      expand: false,
      subCat: [
        { name: 'Timeline 01', url: '/timeline-one' },
      ]
    },
    {
      category: 'Chats',
      Number: 1,
      expand: false,
      subCat: [
        { name: 'Chat 01', url: '/chat-one' },
      ]
    },
    {
      category: 'Dashboards',
      Number: 1,
      expand: false,
      subCat: [
        { name: 'Dashboard 01', url: '/dashboard-one' },
      ]
    },
    {
      category: 'Sliders',
      Number: 2,
      expand: false,
      subCat: [
        { name: 'Slider 01', url: '/slider-one' },
        { name: 'Slider 02', url: '/slider-two' },
      ]
    },
    {
      category: 'Audio Player',
      Number: 2,
      expand: false,
      subCat: [
        { name: 'Audio Player 01', url: '/audio-player-one' },
        { name: 'Audio Player 02', url: '/audio-player-two' },
      ]
    },
  ];

  constructor( private service: CustomThemeService, private navCtrl: NavController) {
    // For Expandable Screen Item
    this.itemsScreen = [
      { expandedHelp: false },
    ];
  }
  // For Expandable Screens Generic Function
  expandItems(item): void {
    if (item.expand == true) {
      item.expand = false;
    }
    else {
      item.expand = true;
    }
  }
  ngOnInit() { }
}

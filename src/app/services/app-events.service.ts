import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class AppEventsService {
  //for rigel cart 
  blurValue$: Observable<any>;
  private blurValue: Subject<any> = new Subject();
  //for rigel category id
  CatId$: Observable<any>;
  private CatId: Subject<any> = new Subject();
  //for rigel tab active
  tabActive$: Observable<any>;
  private tabActive: Subject<any> = new Subject();
  //for rigel bottom template app.component
  s_bottom$: Observable<any>;
  private s_bottom: Subject<any> = new Subject();
  //for becrux side template app.component
  b_bottom$: Observable<any>;
  private b_bottom: Subject<any> = new Subject();
  //for lesath side template app.component
  l_side$: Observable<any>;
  private l_side: Subject<any> = new Subject();
  //for lesath bottom template app.component
  l_bottom$: Observable<any>;
  private l_bottom: Subject<any> = new Subject();
  //for mini becrux categories
  openSubcategoryPage$: Observable<any>;
  private openSubcategoryPage: Subject<any> = new Subject();
  //for mini lesath card change shared-data service 
  cartChange$: Observable<any>;
  private cartChange: Subject<any> = new Subject();
  categoriesLoaded$: Observable<any>;
  private categoriesLoaded: Subject<any> = new Subject();
  //for icons of becrux templates
  icons$: Observable<any>;
  private icons: Subject<any> = new Subject();
    //for icons of becrux templates
    darkTheme$: Observable<any>;
    private darkTheme: Subject<any> = new Subject();
  
  private subscriptions: Subscription = new Subscription();
  constructor() {
    this.CatId$ = this.CatId.asObservable();
    this.blurValue$ = this.blurValue.asObservable();
    this.tabActive$ = this.tabActive.asObservable();
    this.s_bottom$ = this.s_bottom.asObservable();
    this.b_bottom$ = this.b_bottom.asObservable();
    this.l_side$ = this.l_side.asObservable();
    this.l_bottom$ = this.l_bottom.asObservable();
    this.openSubcategoryPage$ = this.openSubcategoryPage.asObservable();
    this.cartChange$ = this.cartChange.asObservable();
    this.categoriesLoaded$ = this.categoriesLoaded.asObservable();
    this.icons$ = this.icons.asObservable();
    this.darkTheme$ = this.darkTheme.asObservable();
  }
  public publish(eventName, eventData: any) {
    if (eventName == "CatId") this.CatId.next(eventData);
    if (eventName == "blurValue") this.blurValue.next(eventData);
    if (eventName == "tabActive") this.tabActive.next(eventData);
    if (eventName == "s_bottom") this.s_bottom.next(eventData);
    if (eventName == "b_bottom") this.b_bottom.next(eventData);
    if (eventName == "l_side") this.l_side.next(eventData);
    if (eventName == "l_bottom") this.l_bottom.next(eventData);
    if (eventName == "openSubcategoryPage") this.openSubcategoryPage.next(eventData);
    if (eventName == "cartChange") this.cartChange.next(eventData);
    if (eventName == "categoriesLoaded") this.categoriesLoaded.next(eventData);
    if (eventName == "icons") this.categoriesLoaded.next(eventData);
    if (eventName == "darkTheme") this.darkTheme.next(eventData);
  }
  public subscribe(eventName) {
    if (eventName == "CatId") return { subscriptions: this.subscriptions, event: this.CatId$ }
    if (eventName == "blurValue") return { subscriptions: this.subscriptions, event: this.blurValue$ }
    if (eventName == "tabActive") return { subscriptions: this.subscriptions, event: this.tabActive$ }
    if (eventName == "s_bottom") return { subscriptions: this.subscriptions, event: this.s_bottom$ }
    if (eventName == "b_bottom") return { subscriptions: this.subscriptions, event: this.b_bottom$ }
    if (eventName == "l_side") return { subscriptions: this.subscriptions, event: this.l_side$ }
    if (eventName == "l_bottom") return { subscriptions: this.subscriptions, event: this.l_bottom$ }
    if (eventName == "openSubcategoryPage") return { subscriptions: this.subscriptions, event: this.openSubcategoryPage$ }
    if (eventName == "cartChange") return { subscriptions: this.subscriptions, event: this.cartChange$ }
    if (eventName == "categoriesLoaded") return { subscriptions: this.subscriptions, event: this.categoriesLoaded$ }
    if (eventName == "icons") return { subscriptions: this.subscriptions, event: this.icons$ }
    if (eventName == "darkTheme") return { subscriptions: this.subscriptions, event: this.darkTheme$ }

  }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HowComponent } from './how/how.component';
import { PricingComponent } from './pricing/pricing.component';
import { PromoComponent } from './promo/promo.component';
import { StoryComponent } from './story/story.component';
import { TestamonialsComponent } from './testamonials/testamonials.component';
import {ContactModule} from "./contact/contact.module";
import {GenericService} from "./shared/services/generic.service";
import {RequestService} from "./shared/services/request.service";
import {StorageService} from "./shared/services/storage.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    FeaturesComponent,
    FooterComponent,
    HeaderComponent,
    HowComponent,
    PricingComponent,
    PromoComponent,
    StoryComponent,
    TestamonialsComponent
  ],
  imports: [
    BrowserModule,
    ContactModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [GenericService,
    StorageService,
    RequestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

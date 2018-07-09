import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutrequestComponent } from './ajoutrequest/ajoutrequest.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AjoutrequestComponent,
  ],
  declarations: [AjoutrequestComponent]
})
export class ContactModule { }

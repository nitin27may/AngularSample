import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonsModule } from "ngx-bootstrap/buttons";
import { ModalModule } from "ngx-bootstrap/modal";


@NgModule({
  imports: [
    CommonModule,

    ModalModule.forRoot(),
    ButtonsModule.forRoot(),

  ],
  exports: [ModalModule, ButtonsModule]
})
export class BootstrapModule {}

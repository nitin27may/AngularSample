import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ConfirmationPopupComponent } from "./core/components/confirmation-popup/confirmation-popup.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSample';
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService){

  }

  open(){
    this.modalRef = this.modalService.show(ConfirmationPopupComponent, Object.assign({}, { class: "gray modal-md" }));
    this.modalRef.content.title = "Do you want to confirm??";
    this.modalRef.content.actionBroadcast.subscribe((value: any) => {
      if (value) {
        if (this.modalRef) {
          console.log("confirm");
          this.modalRef.hide();
        }

      } else {
        console.log("Declined");
      }
    });
  }
}

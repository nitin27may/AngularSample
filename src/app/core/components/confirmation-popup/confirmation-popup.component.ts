import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {

  @Output() actionBroadcast = new EventEmitter();
  title: string = "Do you want to confirm?";
  public constructor(private modalRef: BsModalRef) {}

  confirm() {
    this.actionBroadcast.emit(true);
  }

  decline() {
    this.modalRef.hide();
    this.actionBroadcast.emit(false);
  }
  ngOnInit() {}

}

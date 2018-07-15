import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  modalRef: BsModalRef;
  available = true;
  cUsername: string;

  constructor(
    private modalService: BsModalService,
    private userService: UserService
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public checkAvailability() {
    // TODO: check if username is available
    this.changeUsername();
  }

  public changeUsername() {
    // TODO: call user service to change username
    this.modalRef.hide();
  }
}

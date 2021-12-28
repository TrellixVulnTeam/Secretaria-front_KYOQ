import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { ModalProvisRoutingModule } from './modal-provis-routing.module';
import { NgbdModalBasic, } from './modal-provis.component';


@NgModule({
    imports: [CommonModule, ModalProvisRoutingModule, PageHeaderModule, NgbModule, FormsModule],
    declarations: [NgbdModalBasic]
})
export class ModalProvisModule {}

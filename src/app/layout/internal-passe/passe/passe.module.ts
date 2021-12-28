import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { PasseRoutingModule } from './passe-routing.module';
import { PasseComponent } from './passe.component';
import { ModalPovis } from './modal-provis.component';


@NgModule({
    imports: [CommonModule, PasseRoutingModule, PageHeaderModule, NgbModule, FormsModule],
    declarations: [PasseComponent,ModalPovis]
})
export class PasseModule {}

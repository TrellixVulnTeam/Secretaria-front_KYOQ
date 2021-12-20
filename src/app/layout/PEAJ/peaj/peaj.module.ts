import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { PeajRoutingModule } from './peaj-routing.module';
import { PeajComponent } from './peaj.component';


@NgModule({
    imports: [CommonModule, PeajRoutingModule, PageHeaderModule, NgbModule, FormsModule],
    declarations: [PeajComponent]
})
export class PeajModule {}

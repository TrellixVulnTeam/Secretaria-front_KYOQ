import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { PassesRoutingModule } from './passes-routing.module';
import { PassesComponent } from './passes.component';

@NgModule({
    imports: [CommonModule, PassesRoutingModule, PageHeaderModule, NgbModule, FormsModule],
    declarations: [PassesComponent]
})
export class PassesModule {}

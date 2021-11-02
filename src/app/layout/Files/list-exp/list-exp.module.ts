import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { listExpRoutingModule } from './list-exp-routing.module';
import { ListExpComponent } from './list-exp.component';

@NgModule({
    imports: [CommonModule, listExpRoutingModule, PageHeaderModule, NgbModule, FormsModule],
    declarations: [ListExpComponent]
})
export class ListexpModule {}

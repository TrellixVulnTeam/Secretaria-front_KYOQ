import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { PageHeaderModule } from '../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { createExpRoutingModule } from './create-exp-routing.module';
import { CreateExpComponent } from './create-exp.component';

@NgModule({
    imports: [CommonModule, createExpRoutingModule, PageHeaderModule, NgbModule,FormsModule],
    declarations: [CreateExpComponent]
})
export class CreateexpModule {}

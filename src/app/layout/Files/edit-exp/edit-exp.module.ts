import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { editExpRoutingModule } from './edit-exp-routing.module';
import { EditExpComponent } from './edit-exp.component';

@NgModule({
    imports: [CommonModule, editExpRoutingModule, PageHeaderModule, NgbModule, FormsModule],
    declarations: [EditExpComponent]
})
export class EditexpModule {}

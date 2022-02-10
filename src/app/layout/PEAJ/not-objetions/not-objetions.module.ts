import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { NotObjetionsRoutingModule } from './not-objetions-routing.module';
import { NotObjetionsComponent } from './not-objetions.component';


@NgModule({
    imports: [CommonModule, NotObjetionsRoutingModule, PageHeaderModule, NgbModule, FormsModule],
    declarations: [NotObjetionsComponent]
})
export class NotObjetionsModule {}

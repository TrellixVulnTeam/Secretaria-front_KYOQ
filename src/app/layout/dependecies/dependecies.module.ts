import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import {FormsModule} from '@angular/forms';

import { DependenciesRoutingModule } from './dependecies-routing.module';
import { DependeciesComponent } from './dependecies.component';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule, DependenciesRoutingModule, StatModule, FormsModule],
    declarations: [DependeciesComponent]
})
export class DependenciesModule {}

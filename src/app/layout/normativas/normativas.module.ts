import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import {FormsModule} from '@angular/forms';

import { NormativasRoutingModule } from './normativas-routing.module';
import { NormativasComponent } from './normativas.component';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule, NormativasRoutingModule, StatModule, FormsModule],
    declarations: [NormativasComponent]
})
export class NormativasModule {}

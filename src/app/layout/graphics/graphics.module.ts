import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { graphicsRoutingModule } from './graphics-routing.module';
import { GraphicsComponent } from './graphics.component';

@NgModule({
    imports: [CommonModule, graphicsRoutingModule, PageHeaderModule, NgbModule, FormsModule,Ng2Charts],
    declarations: [GraphicsComponent]
})
export class GraphicsModule {}

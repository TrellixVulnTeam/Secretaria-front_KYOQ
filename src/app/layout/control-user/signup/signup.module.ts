import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import {FormsModule} from '@angular/forms';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
    imports: [CommonModule, TranslateModule, SignupRoutingModule, FormsModule, NgbAlertModule, NgbCarouselModule],
    declarations: [SignupComponent]
})
export class SignupModule {}

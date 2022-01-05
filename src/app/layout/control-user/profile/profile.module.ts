import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import {FormsModule} from '@angular/forms';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
    imports: [CommonModule, TranslateModule, ProfileRoutingModule, FormsModule, NgbAlertModule, NgbCarouselModule],
    declarations: [ProfileComponent]
})
export class ProfileModule {}

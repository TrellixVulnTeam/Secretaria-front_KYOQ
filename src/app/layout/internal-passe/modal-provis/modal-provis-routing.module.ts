import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbdModalBasic } from './modal-provis.component';

const routes: Routes = [
    {
        path: '',
        component: NgbdModalBasic
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModalProvisRoutingModule {}

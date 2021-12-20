import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeajComponent } from './peaj.component';

const routes: Routes = [
    {
        path: '',
        component: PeajComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PeajRoutingModule {}

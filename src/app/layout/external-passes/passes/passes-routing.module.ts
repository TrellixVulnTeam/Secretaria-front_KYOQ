import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassesComponent } from './passes.component';

const routes: Routes = [
    {
        path: '',
        component: PassesComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PassesRoutingModule {}

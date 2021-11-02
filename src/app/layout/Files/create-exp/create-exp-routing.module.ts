import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateExpComponent} from './create-exp.component'
const routes: Routes = [
    {
        path: '',
        component: CreateExpComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class createExpRoutingModule {}

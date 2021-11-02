import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditExpComponent} from './edit-exp.component'

const routes: Routes = [
    {
        path: '',
        component: EditExpComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class editExpRoutingModule {}

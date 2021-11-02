import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListExpComponent } from './list-exp.component';

const routes: Routes = [
    {
        path: '',
        component: ListExpComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class listExpRoutingModule {}



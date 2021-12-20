import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependeciesComponent } from './dependecies.component';

const routes: Routes = [
    {
        path: '',
        component: DependeciesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DependenciesRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotObjetionsComponent } from './not-objetions.component';

const routes: Routes = [
    {
        path: '',
        component: NotObjetionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotObjetionsRoutingModule {}

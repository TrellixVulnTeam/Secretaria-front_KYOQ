import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasseComponent } from './passe.component';

const routes: Routes = [
    {
        path: '',
        component: PasseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PasseRoutingModule {}

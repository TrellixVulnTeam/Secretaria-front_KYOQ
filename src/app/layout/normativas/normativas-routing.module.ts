import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormativasComponent } from './normativas.component';

const routes: Routes = [
    {
        path: '',
        component: NormativasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NormativasRoutingModule {}

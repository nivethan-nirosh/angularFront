import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import { ParentComponent } from './parent/parent.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'event', component: EventComponent},
    {path: 'two-way-data', component: TwoWayDataComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'control', component: ControlFlowComponent}
];

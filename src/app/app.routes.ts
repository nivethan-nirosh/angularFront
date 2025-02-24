import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import { ParentComponent } from './parent/parent.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'event', component: EventComponent},
    {path: 'two-way-data', component: TwoWayDataComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'control', component: ControlFlowComponent},
    {path: 'content-parent', component: ContentParentComponent},
    {path: 'content-child', component: ContentChildComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'datatable', component: DatatableComponent},
    {path: 'reactive-form', component: ReactiveFormComponent}
];

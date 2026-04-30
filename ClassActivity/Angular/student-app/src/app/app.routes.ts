import { Routes } from '@angular/router';
import { StudentCard } from '../student-card/student-card';
import { LiveInput } from '../live-input/live-input';
import { Directives } from '../directives/directives';

export const routes: Routes = [
    {path:'student-card',component:StudentCard},
    {path:'live-input',component:LiveInput},
    {path:'directives',component:Directives},


];

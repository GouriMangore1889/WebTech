import { Routes } from '@angular/router';
import { ConceptRoute } from '../concept-route/concept-route';
import { Home } from '../home/home';
import { ListStudent } from '../list-student/list-student';

export const routes: Routes = [
    {path:'conceptRoute',component:ConceptRoute},
    {path:'home',component:Home},
    {path:'listStudent',component:ListStudent}
];

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContainerComponent} from './container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'loads',
        loadChildren: './loads/loads.module#LoadsModule'
      },
     {
        path: 'charters',
        loadChildren: './charters/charters.module#ChartersModule'
       },
       {
        path: 'career',
        loadChildren: './career/career.module#CareerModule'
       },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontPanelRoutingModule {
}

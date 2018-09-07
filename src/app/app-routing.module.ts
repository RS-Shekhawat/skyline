import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/front/front.module#FrontModule',
  },
  {
    path: 'panel',
    loadChildren: './views/front-panel/front-panel.module#FrontPanelModule',
  },
  {
    path: 'admin',
    loadChildren: './views/admin/admin.module#AdminModule',
  },
];

@NgModule({

  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule {
}

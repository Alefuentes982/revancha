import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'afnlogin',
    pathMatch: 'full'
  },
  {
    path: 'afnlogin',
    loadChildren: () => import('./afnlogin/afnlogin.module').then(m => m.AfnloginPageModule)
  },
  {
    path: 'afnlista/:email',
    loadChildren: () => import('./afnlista/afnlista.module').then(m => m.AfnlistaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

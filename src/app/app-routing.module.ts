import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateTokenComponent } from './create-token/create-token.component';
import { InfoTokenComponent } from './info-token/info-token.component'
import { NoInfoGuard } from './no-info.guard';

const routes: Routes = [
  { path: 'create-token', component: CreateTokenComponent },
  { path: 'info-token', component: InfoTokenComponent, canActivate: [NoInfoGuard] },
  {
    path: '', redirectTo: 'create-token', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

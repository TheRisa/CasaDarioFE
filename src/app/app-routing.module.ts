import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'loading',
    loadChildren: './loading/loading.module#LoadingComponentModule'
  },
  {
    path: 'calendario',
    loadChildren: './calendario/calendario.module#CalendarioPageModule'
  },
  {
    path: 'ban-list',
    loadChildren: './ban-list/ban-list.module#BanListPageModule'
  },
  { path: 'ask-me', loadChildren: './ask-me/ask-me.module#AskMePageModule' },
  {
    path: 'annales',
    loadChildren: './history/history.module#HistoryPageModule'
  },
  {
    path: 'presence',
    loadChildren: './presence/presence.module#PresencePageModule'
  },  { path: 'achivment', loadChildren: './achivment/achivment.module#AchivmentPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

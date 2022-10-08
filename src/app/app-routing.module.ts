import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: 'news',
    loadChildren: () => import('./features/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'converter',
    loadChildren: () => import('./features/converter/converter.module').then(m => m.ConverterModule)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

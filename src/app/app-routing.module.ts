import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'salud-sexual',
    loadChildren: () => import('./pages/salud-sexual/salud-sexual.module').then( m => m.SaludSexualPageModule)
  },
  {
    path: 'gestion-emociones',
    loadChildren: () => import('./pages/gestion-emociones/gestion-emociones.module').then( m => m.GestionEmocionesPageModule)
  },
  {
    path: 'generos',
    loadChildren: () => import('./pages/generos/generos.module').then( m => m.GenerosPageModule)
  },
  {
    path: 'sexo-afectivas',
    loadChildren: () => import('./pages/sexo-afectivas/sexo-afectivas.module').then( m => m.SexoAfectivasPageModule)
  },
  {
    path: 'acoso',
    loadChildren: () => import('./pages/acoso/acoso.module').then( m => m.AcosoPageModule)
  },
  {
    path: 'consumo-problematico',
    loadChildren: () => import('./pages/consumo-problematico/consumo-problematico.module').then( m => m.ConsumoProblematicoPageModule)
  },
  {
    path: 'alimentacion',
    loadChildren: () => import('./pages/alimentacion/alimentacion.module').then( m => m.AlimentacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

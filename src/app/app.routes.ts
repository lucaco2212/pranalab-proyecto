import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Pranalab | Laboratorio Farmacéutico B2B'
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros.component').then(m => m.NosotrosComponent),
    title: 'Nosotros | Pranalab'
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./pages/catalogo/catalogo.component').then(m => m.CatalogoComponent),
    title: 'Catálogo de Productos | Pranalab'
  },
  {
    path: 'catalogo/:slug',
    loadComponent: () => import('./pages/producto/producto.component').then(m => m.ProductoComponent),
    title: 'Detalle de Producto | Pranalab'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.component').then(m => m.ContactoComponent),
    title: 'Contacto Comercial | Pranalab'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

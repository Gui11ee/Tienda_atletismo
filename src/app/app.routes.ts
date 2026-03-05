import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { Detalle } from './pages/detalle/detalle';
import { Encargos } from './pages/encargos/encargos';
import { Contacto } from './pages/contacto/contacto';
import { Gracias } from './pages/gracias/gracias';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'productos', component: Productos },
	{ path: 'productos/:slug', component: Detalle },
	{ path: 'carrito', component: Encargos },
	{ path: 'contacto', component: Contacto },
	{ path: 'gracias', component: Gracias },
	{ path: '**', redirectTo: '' }
];

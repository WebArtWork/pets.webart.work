import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./pets.component').then((m) => m.PetsPageComponent),
	},
];

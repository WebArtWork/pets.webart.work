import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-shelters.component').then((m) => m.ForSheltersPageComponent),
	},
];

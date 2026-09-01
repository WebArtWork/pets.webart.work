import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-owners.component').then((m) => m.ForOwnersPageComponent),
	},
];

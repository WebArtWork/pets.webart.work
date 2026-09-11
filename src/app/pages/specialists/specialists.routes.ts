import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./specialists.component').then(
				(m) => m.SpecialistsPageComponent,
			),
	},
];

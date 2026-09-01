import { Routes } from '@angular/router';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';
import { MetaGuard } from '@wawjs/ngx-core';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: '',
				pathMatch: 'full',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Головна',
					},
				},
				loadChildren: () =>
					import('./pages/landing/landing.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'sign',
				canActivate: [guestGuard, MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
					},
				},
				loadChildren: () =>
					import('./pages/sign/sign.routes').then((m) => m.routes),
			},
			{
				path: 'profile',
				canActivate: [authenticatedGuard, MetaGuard],
				data: {
					meta: {
						title: 'Мій профіль',
					},
				},
				loadChildren: () =>
					import('./pages/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
					},
				},
				loadChildren: () =>
					import('./pages/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запросити в Pets',
						description:
							'Відскануйте QR-код, щоб приєднатися до Pets за кілька секунд.',
					},
				},
				loadChildren: () =>
					import('./pages/share/share.routes').then((m) => m.routes),
			},
			{
				path: 'for-owners',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для власників тварин',
						description:
							'Ведіть профіль тварини, історію здоров’я та записи на прийом разом з Pets.',
					},
				},
				loadChildren: () =>
					import('./pages/for-owners/for-owners.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-specialists',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для спеціалістів',
						description:
							'Пропонуйте ветеринарні, грумінг, дресирувальні та інші послуги власникам тварин через Pets.',
					},
				},
				loadChildren: () =>
					import('./pages/for-specialists/for-specialists.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-shelters',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для притулків',
						description:
							'Керуйте тваринами, заявками на усиновлення та волонтерами разом з Pets.',
					},
				},
				loadChildren: () =>
					import('./pages/for-shelters/for-shelters.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-businesses',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для бізнесу',
						description:
							'Пропонуйте товари та послуги для тварин власникам, спеціалістам і притулкам через Pets.',
					},
				},
				loadChildren: () =>
					import('./pages/for-businesses/for-businesses.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [adminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full',
	},
];

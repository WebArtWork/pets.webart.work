import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollModule } from '@wawjs/ngx-prime/animateonscroll';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { SpiderComponent } from '@wawjs/ngx-bos';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface LandingFeature {
	number: string;
	icon: string;
	title: string;
	description: string;
	linkLabel: string;
	route: string;
}

interface LandingHistoryEvent {
	date: string;
	icon: string;
	title: string;
	description: string;
	tag: string;
}

interface LandingAudience {
	number: string;
	route: string;
	title: string;
	description: string;
}

@Component({
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	imports: [
		RouterLink,
		SpiderComponent,
		ButtonModule,
		CardModule,
		AnimateOnScrollModule,
		TranslateDirective,
	],
})
export class LandingComponent {
	readonly translateService = inject(TranslateService);

	readonly historyEvents: LandingHistoryEvent[] = [
		{
			date: 'Червень 2026',
			icon: 'pi pi-file',
			title: 'Плановий огляд',
			description: 'Вакцинація та огляд у ветеринара',
			tag: 'Огляд',
		},
		{
			date: 'Березень 2025',
			icon: 'pi pi-heart',
			title: 'Курс лікування',
			description: 'Призначення після огляду шкіри',
			tag: 'Лікування',
		},
		{
			date: 'Вересень 2024',
			icon: 'pi pi-file-check',
			title: 'Профіль створено',
			description: 'Вид, порода, вік і перші щеплення',
			tag: 'Профіль',
		},
	];

	readonly features: LandingFeature[] = [
		{
			number: '01',
			icon: 'pi pi-heart',
			title: 'Профіль тварини',
			description:
				'Вид, порода, вік, фото та історія здоров’я в одному місці.',
			linkLabel: 'Переглянути тварин',
			route: '/pets',
		},
		{
			number: '02',
			icon: 'pi pi-id-card',
			title: 'Спеціалісти',
			description:
				'Ветеринари, грумери та дресирувальники з перевіреними профілями.',
			linkLabel: 'Переглянути спеціалістів',
			route: '/specialists',
		},
		{
			number: '03',
			icon: 'pi pi-home',
			title: 'Притулки',
			description: 'Притулки та тварини, які шукають дім.',
			linkLabel: 'Переглянути притулки',
			route: '/shelters',
		},
		{
			number: '04',
			icon: 'pi pi-images',
			title: 'Стрічка',
			description: 'Оновлення про прийоми, усиновлення та спільноту.',
			linkLabel: 'Переглянути стрічку',
			route: '/feed',
		},
	];

	readonly audiences: LandingAudience[] = [
		{
			number: '01',
			route: '/for-owners',
			title: 'Власникам',
			description: 'Ведіть історію тварини та записуйтесь до спеціалістів.',
		},
		{
			number: '02',
			route: '/for-specialists',
			title: 'Спеціалістам',
			description: 'Приймайте власників із повним контекстом історії.',
		},
		{
			number: '03',
			route: '/for-shelters',
			title: 'Притулкам',
			description: 'Керуйте тваринами та заявками на усиновлення.',
		},
		{
			number: '04',
			route: '/for-businesses',
			title: 'Бізнесу',
			description: 'Пропонуйте товари й послуги для тварин.',
		},
	];
}

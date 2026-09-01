import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-owners',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-owners.component.html',
	styleUrl: './for-owners.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForOwnersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує ведення профілю тварини?',
			answer: 'Створення профілю тварини та ведення базової історії здоров’я безкоштовне для власників.',
		},
		{
			question: 'Чи можу я зберігати документи кількох тварин в одному місці?',
			answer: 'Так. Кожна тварина має власний профіль з історією здоров’я, записами на прийом і документами, і ви можете додати скільки завгодно тварин.',
		},
		{
			question: 'Як записатися до спеціаліста через Pets?',
			answer: 'Ви обираєте спеціаліста або послугу з каталогу та бронюєте зручний час — запис одразу прив’язується до профілю тварини.',
		},
	];
}

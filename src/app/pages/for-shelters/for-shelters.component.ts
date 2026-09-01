import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-shelters',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-shelters.component.html',
	styleUrl: './for-shelters.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForSheltersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує ведення притулку на Pets?',
			answer: 'Публікація тварин на усиновлення та ведення базових записів безкоштовні для притулків.',
		},
		{
			question: 'Як приймати заявки на усиновлення?',
			answer: 'Кожна тварина отримує профіль з фото та описом; заявки від охочих усиновити збираються та відстежуються в одному місці.',
		},
		{
			question: 'Чи можу я вести медичні записи тварин притулку?',
			answer: 'Так, для кожної тварини можна вести історію лікування, щеплень і оглядів, а також залучати волонтерів до догляду.',
		},
	];
}

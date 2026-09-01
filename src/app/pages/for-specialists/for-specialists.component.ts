import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-specialists',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-specialists.component.html',
	styleUrl: './for-specialists.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForSpecialistsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Які спеціалісти можуть приєднатися до Pets?',
			answer: 'Ветеринари, грумери, дресирувальники, вигульники, заводчики та інші фахівці з догляду за тваринами.',
		},
		{
			question: 'Як я отримую записи від власників тварин?',
			answer: 'Ви публікуєте послугу з ціною та розкладом, а власники бронюють зручний час — запис одразу потрапляє у ваш календар.',
		},
		{
			question: 'Чи бачу я історію тварини перед прийомом?',
			answer: 'Так, за згодою власника ви бачите історію здоров’я тварини, що допомагає підготуватися до візиту заздалегідь.',
		},
	];
}

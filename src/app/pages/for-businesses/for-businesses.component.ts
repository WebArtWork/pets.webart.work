import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-businesses',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-businesses.component.html',
	styleUrl: './for-businesses.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForBusinessesPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Які бізнеси можуть продавати на Pets?',
			answer: 'Магазини кормів і товарів, готелі для тварин, страхові компанії, перевізники та інші постачальники послуг для тварин.',
		},
		{
			question: 'Як власники тварин знаходять мої товари чи послуги?',
			answer: 'Ваші пропозиції з’являються в каталозі Pets, де їх шукають власники, спеціалісти та притулки.',
		},
		{
			question: 'Чи можу я продавати і товари, і послуги одночасно?',
			answer: 'Так, один бізнес-профіль може поєднувати продаж товарів (корм, аксесуари) та послуг (проживання, страхування, перевезення).',
		},
	];
}

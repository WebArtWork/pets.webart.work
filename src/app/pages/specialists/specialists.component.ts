import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-specialists',
	imports: [TranslateDirective],
	templateUrl: './specialists.component.html',
	styleUrl: './specialists.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialistsPageComponent {
	readonly translateService = inject(TranslateService);
}

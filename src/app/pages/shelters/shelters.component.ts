import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-shelters',
	imports: [TranslateDirective],
	templateUrl: './shelters.component.html',
	styleUrl: './shelters.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheltersPageComponent {
	readonly translateService = inject(TranslateService);
}

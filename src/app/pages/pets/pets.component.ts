import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-pets',
	imports: [TranslateDirective],
	templateUrl: './pets.component.html',
	styleUrl: './pets.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsPageComponent {
	readonly translateService = inject(TranslateService);
}

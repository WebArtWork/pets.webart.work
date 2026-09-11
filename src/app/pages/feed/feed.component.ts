import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-feed',
	imports: [TranslateDirective],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedPageComponent {
	readonly translateService = inject(TranslateService);
}

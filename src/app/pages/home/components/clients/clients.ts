import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Signal, effect, inject, signal } from '@angular/core';
import { Icon } from '@shared/components/icon/icon';
import { Subscription, interval } from 'rxjs';
import { SpotlightDirective } from '../expertise-area/directive/spotlight.directive';
import { Loader } from '@shared/components/loader/loader';

@Component({
    selector: 'clients',
    encapsulation: ViewEncapsulation.None,
    imports: [Icon, SpotlightDirective, Loader],
    standalone: true,
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Clients implements OnInit {
    clients = signal<{ name: string; logo: string }[]>([
        { name: 'Client A', logo: '/assets/logos/client-a.svg' },
        { name: 'Client B', logo: '/assets/logos/client-b.svg' },
        { name: 'Client C', logo: '/assets/logos/client-c.svg' },
        // Add more clients as needed
    ]);

    constructor() { }

    ngOnInit(): void { }
}

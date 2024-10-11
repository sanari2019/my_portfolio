// import { Component } from '@angular/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Signal, effect, inject, signal } from '@angular/core';
// import { Icon } from '@sh';
import { Subscription, interval } from 'rxjs';
import { SpotlightDirective } from '../expertise-area/directive/spotlight.directive';
// import { Loader } from '@shared/components/loader/loader';


@Component({
  selector: 'recommendations',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SpotlightDirective],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {

}

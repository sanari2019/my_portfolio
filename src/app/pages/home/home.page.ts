import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { ExpertiseArea } from '@pages/home/components/expertise-area/expertise-area';
import { Intro } from '@pages/home/components/intro/intro';
import { Clients } from '@pages/home/components/clients/clients';
import { RecommendationsComponent } from '@pages/home/components/recommendations/recommendations.component';
import { LanguageTools } from '@pages/home/components/language-tools/language-tools';
import { InWork } from '@pages/home/components/in-work/in-work';
// import { Clients } from '@pages/home/components/clients
import { Loader } from '@shared/components/loader/loader';
@Component({
  selector: 'home-page',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ExpertiseArea, Intro, LanguageTools, InWork, Loader, Clients, RecommendationsComponent],
  template: `
    @defer(on immediate){
      <intro/>
      <expertise-area/>
      <language-tools/>
      <clients />
      <recommendations />
    }@placeholder {
      <loader/>
    }
  `
})
export class HomePage {
  metaService = inject(MetaService);
  constructor() {
    this.metaService.setMetaTags(
      `Home - ${profileData.name}`,
      'Dive into my portfolio, a passionate software engineer based in the Philippines. Explore the intricacies of my journey, from personal details to exciting projects. Join me on this virtual exploration of technology, creativity, and more.',
      [
        'samuel oluwaseun anari',
        'samuel anari',
        'samachoo2010',
        'software engineer',
        'nigerian',
        'bio',
        'developer',
        'portfolio',
        'development',
        'android',
        'web',
        'ios',
      ]
    );
  }
}

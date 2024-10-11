import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewEncapsulation, effect, inject, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { PlatformCheckService } from '@core/services/platform-check.service';
import { Button } from '@shared/components/button/button';
import { ManSorrow } from '@pages/home/components/intro/man-sorrow/man-sorrow';
import { SocialLink } from '@shared/components/social-link/social-link';
import ProfileData from '@data/profile.data'
import { ProfileSchema } from '@data/schema/profile.schema';
import { Icon } from '@shared/components/icon/icon';
import { file } from '@icon/solid.icon';
import { Loader } from '@shared/components/loader/loader';
@Component({
  selector: 'intro',
  template: `
    <section class="relative">
      <div class="grid grid-cols-1">
        <!-- div className="w-full md:w-1/3 text-left -->
        <div
          class="sm:w-full lg:w-8/12 sm:w-auto inset-y-1/4   flex flex-col gap-3 justify-between sm:absolute item-center align-center left-0 rounded-md bg-clip-padding dark:bg-indigo-950  bg-gray-300 dark:bg-opacity-25 bg-opacity-25 backdrop-filter p-5">
          <p class="dark:text-gray-200 "><span
              ></span>Hey There 👋 I am, &nbsp;&nbsp;<br/><!--<span class=" justify-start text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">&nbsp;&nbsp;{{ changingText() }}
              </span>-->
          </p>
          <!-- <p class="uppercase left-0"><span class="uppercase sm:text-center text-3xl lg:text-4xl xl:text-5xl text-primary-600 dark:text-primary-400"> {{profile().name}}, </span></p> -->
          <!-- <h1 class="text-xl font-semibold dark:text-white">Hi, I am <span class="text-primary-600 dark:text-primary-400 ">{{profile().name}}</span></h1> -->
          <!-- <h2><span class="dark:text-gray-200"  id="dynamic-text">A,{{ dynamicText }}</span></h2> -->
          <p class="justify-start flex flex-col sm:text-left leading-normal text-gray-700 dark:text-gray-200 sm:w-full">
          <span class="uppercase text-3xl lg:text-4xl xl:text-5xl text-primary-600 dark:text-primary-400"> {{profile().name}}, </span>
          <span class="font-semibold uppercase">Full Stack Developer</span> <br><span>with roots in data science, information systems, and analysis. <br>From data entry to full-stack development, I've mastered the art of turning insights into impactful digital solutions. Currently leveling up with a Master’s in Software Engineering in the UK.</span>
            <!-- Full Stack Developer and Software Engineering master’s student in the UK. <br>I mix code, creativity, and data science to build smart, sleek digital experiences. <br>Let’s create something extraordinary.           -->
          </p>
          <!-- <div class="flex flex-col sm:flex-row sm:items-center gap-4">
            <btn [link]="profile().resumeLink" ariaLabel="resume" class="flex gap-1">
              <icon [size]="20" iconClass="fill-white"
              [path]="fileIcon"
              />
            <span class="text-sm sm:text-lg font-general-medium duration-100">Download Resume</span>
            </btn>
            <social-link/>
          </div> -->
         <!-- <button class="text-black dark:text-gray-200 hover:before:bg-redborder-red-500 relative h-[30px] w-40 overflow-hidden border rounded border-blue-950 bg-white dark:border-gray-200 dark:bg-blue-950 px-3 text-black dark:text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-950 dark:before:bg-white before:transition-all before:duration-500 hover:text-white dark:hover:text-black hover:shadow-grey-500 dark:hover:shadow-blue-200 hover:before:left-0 hover:before:w-full"><span class="relative z-10">Get in touch</span></button> -->

        </div>
        <div>
          <man-sorrow class="flex justify-end"/>
        </div>

      </div>
      
    </section>
  `,
  imports: [SocialLink, Button, ManSorrow, Icon, Loader],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class Intro implements OnInit {
  dynamicText: string = "";
  phrases: string[] = [
    "Team Player.",
    "Full Stack Developer.",
    "Certified Data Scientist.",
    "Software Developer.",
    "Data Analyst.",
    "Backend Engineer.",
    "Frontend Engineer.",
    "Software Engineer.",
    "Code Enthusiast.",
    "Data Enthusiast.",
  ];

  currentPhraseIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 100;
  delayBetweenPhrases: number = 2000;
  profile = signal<ProfileSchema>(ProfileData);
  fileIcon = file;
  public changingText = signal<string>(this.profile().greetings[0]);
  platformCheck = Inject(PlatformCheckService)
  cd = inject(ChangeDetectorRef)
  currentGreetingIndex = signal<number>(0);
  greetingSub!: Subscription;

  constructor() {
    effect((onCleanup) => {
      this.greetingSub = interval(2000).subscribe(() => {
        this.updateText();
        this.type();
      });
      onCleanup(() => {
        if (this.greetingSub) {
          this.greetingSub.unsubscribe();
        }
      });
    });
  }

  ngOnInit(): void {
    this.type();
  }

  updateText(): void {
    this.currentGreetingIndex.set((this.currentGreetingIndex() + 1) % this.profile().greetings.length);
    this.changingText.set(this.profile().greetings[this.currentGreetingIndex()]);
  }
  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    if (this.isDeleting) {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      setTimeout(() => this.type(), this.delayBetweenPhrases);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.type(), 500);
    } else {
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      setTimeout(() => this.type(), speed);
    }
  }
}

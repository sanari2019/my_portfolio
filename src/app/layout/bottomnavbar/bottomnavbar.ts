import {
    ChangeDetectionStrategy,
    Component,
    Renderer2,
    ViewEncapsulation,
    inject,
    AfterViewInit,
    computed,
    effect,
    ElementRef
} from '@angular/core';
import { ChangeDetectorRef, Inject, OnInit, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { PlatformCheckService } from '@core/services/platform-check.service';
import { Button } from '@shared/components/button/button';
import { ManSorrow } from '@pages/home/components/intro/man-sorrow/man-sorrow';
import { SocialLink } from '@shared/components/social-link/social-link';
import ProfileData from '@data/profile.data'
import { ProfileSchema } from '@data/schema/profile.schema';
import { download, file } from '@icon/solid.icon';
import { Loader } from '@shared/components/loader/loader';
import { RouterModule } from '@angular/router';
import { DarkModeService } from '@core/services/dark-mode.service';
import { Logo } from '@shared/components/logo/logo';
import { CommonModule, DOCUMENT, NgClass } from '@angular/common';
import navlinkData from '@data/nav-link.data';
import { Icon } from '@shared/components/icon/icon';
import { moon, sun } from '@icon/regular.icon';
import { ThemeService } from '@core/services/theme.service';
import { paintBucket } from '@icon/solid.icon';
import { createPopper } from '@popperjs/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SocialLinkSchema } from '@data/schema/social-links.schema';
import socialLinkData from '@data/social-link.data';

@Component({
    selector: 'bottom-navbar',
    imports: [CommonModule, RouterModule, Logo, NgClass, Icon, MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        CdkScrollable,
        MatButtonModule,
        MatTooltipModule, Button, SocialLink],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    template: `
          <div class="fixed z-50 w-full h-12 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
                <ng-container *ngFor="let link of socialLinks()">
                    <button [attr.data-tooltip-target]="'tooltip-' + link.name" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-200 dark:hover:bg-gray-800 group rounded-full">
                        <svg [attr.class]="'w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 hover:fill-[{{ link.color }}] dark:hover:fill-[{{ link.color }}]'" [attr.aria-hidden]="true" [attr.xmlns]="'http://www.w3.org/2000/svg'" [attr.fill]="link.color" [attr.viewBox]="'0 0 20 20'">
                            <path [attr.d]="link.path"/>
                        </svg>
                        <span class="ml-2 text-xs text-gray-500 group-hover:text-blue-600 group-hover:opacity-100 transition-opacity duration-200 dark:text-gray-300">{{ link.name }}</span>
                    </button>
                    <div [id]="'tooltip-' + link.name" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        {{ link.name }}
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </ng-container>
                <div class="flex justify-center">
                    <a [href]="profile().resumeLink" target="_blank" aria-label="Download Resume" class="group flex items-center inline-flex flex-col items-center justify-center px-5 hover:bg-gray-200 dark:hover:bg-gray-800 group rounded-full">
                        <icon [size]="25" iconClass="w-5 h-5 fill-gray-500 group-hover:fill-blue-600 transition-colors duration-200" [path]="fileIcon" />                        
                        <!-- <icon [size]="25" iconClass="fill-gray-500 group-hover:fill-blue-600 transition-colors duration-200" [path]="downloadIcon" /> -->
                        <span class="ml-2 text-xs text-gray-500 group-hover:text-blue-600 group-hover:opacity-100 transition-opacity duration-200 dark:text-gray-300"> Resume</span>
                    </a>
                </div>
               
            </div>
        </div>

    `,
})
export class BottomNavbar {
    profile = signal<ProfileSchema>(ProfileData);
    fileIcon = file;
    downloadIcon = download;
    socialLinks = signal<SocialLinkSchema[]>(socialLinkData);
    platformCheck = Inject(PlatformCheckService);
    cd = inject(ChangeDetectorRef);

    positionOptions: TooltipPosition[] = ['above', 'left', 'right'];
    position = new FormControl(this.positionOptions[0]);

    constructor(private renderer: Renderer2, private el: ElementRef) { }
}   
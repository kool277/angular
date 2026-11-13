import {Component, signal} from '@angular/core';
import {Tab, TabContent, TabList, TabPanel, Tabs} from '@angular/aria/tabs';

@Component({
  selector: 'app-a11y-recipe-tabs',
  imports: [Tabs, TabList, Tab, TabPanel, TabContent],
  templateUrl: './recipe-tabs.html',
  styleUrl: './recipe-tabs.css',
})
export class A11yRecipeTabs {
  readonly selectedTab = signal<string | undefined>('ingredients');
}

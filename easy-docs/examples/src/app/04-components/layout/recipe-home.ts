import {Component} from '@angular/core';
import {CompInfoNote} from '../host/info-note';
import {CompRecipeCard} from '../recipe-card/recipe-card';
import {CompSiteFooter} from './site-footer';
import {CompSiteHeader} from './site-header';
import {CompSiteNav} from './site-nav';

@Component({
  selector: 'app-recipe-home',
  imports: [CompSiteHeader, CompSiteNav, CompRecipeCard, CompInfoNote, CompSiteFooter],
  templateUrl: './recipe-home.html',
  styleUrl: './recipe-home.css',
})
export class CompRecipeHome {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { StoryComponent } from './story/story.component';
import { BloghomeComponent } from './bloghome/bloghome.component';


@NgModule({
  declarations: [
    PuzzleComponent,
    StoryComponent,
    BloghomeComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }

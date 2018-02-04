import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TweetsComponent } from './tweets/tweets.component';
import {TweetService} from './service/tweet-service.service';
import { SearchResultsComponent } from './search-results/search-results.component';
import {RouterModule, Routes} from '@angular/router';
import { TweetTextComponent } from './tweet-text/tweet-text.component';


const appRoutes: Routes = [
  { path: 'search/:searchKey', component: SearchResultsComponent},
  { path: '', component: TweetsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    SearchResultsComponent,
    TweetTextComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

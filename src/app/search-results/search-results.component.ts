import { Component} from '@angular/core';
import {TweetService} from '../service/tweet-service.service';
import {Tweet} from '../tweets/tweet.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})


export class SearchResultsComponent {

  tweets: Tweet[];

  constructor(private tweetService: TweetService,  private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      const searchKey = params['searchKey'];
      if (searchKey) {
        tweetService.getSearchResults(searchKey).subscribe(
          tweets => this.tweets = tweets,
          error => console.log(error)
        );
      }
    });
  }

}

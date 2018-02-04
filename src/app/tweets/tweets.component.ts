import {Component} from '@angular/core';
import {Tweet} from './tweet.model';
import {TweetService} from '../service/tweet-service.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})

export class TweetsComponent  {

  tweets: Tweet[];


 /* constructor(private tweetService: TweetService) {
    this.tweets = tweetService.getTweets();
  }*/
  constructor(private tweetService: TweetService) {
    tweetService.getTweets().subscribe(
      tweets => this.tweets = tweets,
      error => console.log(error)
    );
  }



}

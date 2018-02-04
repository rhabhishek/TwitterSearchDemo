import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-text',
  template: `<div [innerHTML]="tweetText"></div>`,
  styleUrls: ['./tweet-text.component.css']
})
export class TweetTextComponent implements OnInit {

  @Input('urlClass') urlClass = 'react-tweet-parser__url';
  @Input('userClass') userClass = 'react-tweet-parser__user';
  @Input('hashtagClass') hashtagClass = 'react-tweet-parser__hashTag';
  @Input('searchWithHashtags') searchWithHashtags = true;
  @Input('parseUsers') parseUsers = true;
  @Input('parseUrls') parseUrls = true;
  @Input('parseHashtags') parseHashtags = true;
  @Input('tweet') tweet = '';

  tweetText = '';
  constructor() {
  }

  generateLink(url, urlClass, text) {
    return `<a href="${url}" className="${urlClass}">${text}</a>`;
  }


  ngOnInit() {
    this.parseTweet();
  }

  parseTweet() {
    const {urlClass, userClass, hashtagClass, searchWithHashtags, parseUsers, parseUrls, parseHashtags} = this;

    const REGEX_URL = /(?:\s)(f|ht)tps?:\/\/([^\s\t\r\n<]*[^\s\t\r\n<)*_,\.])/g, // regex for urls
      REGEX_USER = /\B@([a-zA-Z0-9_]+)/g, // regex for @users
      REGEX_HASHTAG = /\B(#[Ã¡-ÃºÃ-ÃÃ¤-Ã¼Ã-Ãa-zA-Z0-9_]+)/g; // regex for #hashtags
    let searchlink, myTweet = this.tweet; // search link for hashtags
    // Hashtag Search link
    if (searchWithHashtags) {
      // this is the search with hashtag
      searchlink = '/search/';
    } else {
      // this is a more global search including hashtags and the word itself
      searchlink = '/search/';
    }
    // turn URLS in the tweet into... working urls
    if (parseUrls) {
      myTweet = myTweet.replace(REGEX_URL, (url) => {
        const link = this.generateLink(url, urlClass, url);

        return url.replace(url, link);
      });
    }
    // turn @users in the myTweet into... working urls
    if (parseUsers) {
      myTweet = myTweet.replace(REGEX_USER, (user) => {
        const userOnly = user.slice(1),
          url = `/search/${userOnly}`,
          link = this.generateLink(url, userClass, user);
        return user.replace(user, link);
      });
    }
    // turn #hashtags in the myTweet into... working urls
    if (parseHashtags) {
      myTweet = myTweet.replace(REGEX_HASHTAG, (hashtag) => {
        const hashtagOnly = hashtag.slice(1),
          url = searchlink + hashtagOnly,
          link = this.generateLink(url, hashtagClass, hashtag);
        return hashtag.replace(hashtag, link);
      });
    }

    this.tweetText  = myTweet;
  }
}



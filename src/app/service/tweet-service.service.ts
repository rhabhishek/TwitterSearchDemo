import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Tweet} from '../tweets/tweet.model';

@Injectable()
export class TweetService {
  tweets: Tweet[];
 /* tweets: Tweet[] = [
    new Tweet(new Date('2014-06-01 23:07:58'),
      `President Resigns in Georgia’s Breakaway
      Region of Abkhazia http://t.co/DAploRvCvV `, 'nytimes'),
    new Tweet(new Date('2014-06-01 23:48:06'),
      `The NYT FlipBoard guide to understanding
      climate change and its consequences http://t.co/uPGTuYiSmQ`, 'nytimes'),
    new Tweet(new Date('2014-06-01 23:48:06'),
      `The NYT FlipBoard guide to understanding
      climate change and its consequences http://t.co/uPGTuYiSmQ`, 'nytimes'),
    new Tweet(new Date('2014-06-01 23:48:06'),
      `The NYT FlipBoard guide to understanding
      climate change and its consequences http://t.co/uPGTuYiSmQ`, 'nytimes'),
    new Tweet(new Date('2014-06-01 23:48:06'),
      `The NYT FlipBoard guide to understanding
      climate change and its consequences http://t.co/uPGTuYiSmQ`, 'nytimes'),
    new Tweet(new Date('2014-06-01 23:48:06'),
      `The NYT FlipBoard guide to understanding
      climate change and its consequences http://t.co/uPGTuYiSmQ`, 'nytimes'),
    new Tweet(new Date('2014-06-01 23:48:06'),
      `The NYT FlipBoard guide to understanding
      climate change and its consequences http://t.co/uPGTuYiSmQ`, 'nytimes'),
    new Tweet(new Date('2014-06-01 23:48:06'),
      `The NYT FlipBoard guide to understanding
      climate change and its consequences http://t.co/uPGTuYiSmQ`, 'nytimes'),
    new Tweet(new Date('2014-06-01 23:48:06'),
      `The NYT FlipBoard guide to understanding
      climate change and its consequences http://t.co/uPGTuYiSmQ`, 'nytimes'),
    new Tweet(new Date('2014-06-01 23:48:06'),
      `The NYT FlipBoard guide to understanding
      climate change and its consequences http://t.co/uPGTuYiSmQ`, 'nytimes')
  ];
*/

   constructor(private http: Http) {}


  getTweets(): Observable<any[]> {

    return  this.http.get('http://localhost:3000/api/posts')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  getSearchResults(key: string): Observable<any[]> {

    return  this.http.get('http://localhost:3000/api/search/' + key)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }
}

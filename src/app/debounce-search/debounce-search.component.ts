import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.css']
})
export class DebounceSearchComponent {

  searchTerm: string;
  results;
  latestSearch = new Subject<string>(); // a subject is a subclass of Observer

  constructor(private http: HttpClient) {
    // I'm gonna use http to fetch some data, this will give us an Observable response
    this.results = this.latestSearch
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(term => !!term),
        switchMap(term => this.http.get<any>(`https://api.github.com/search/repositories?q=${term}&sort=stars&order=desc`)
                          .pipe(map(res => res.items.map(item => {
                            return { name: item.name, url: item.html_url };
                          }))))
      );
    /* what the heck are we doing here?
    we wanna do a backend search, but we realized that doing a fetch to api, everytime the user press a key
    it's not the best way to do it.
    The idea is to debounce the call for some time to give the user time to enter all the keys he want to search.

    pipe: Observables now have a pipe method available on the instances allowing you to call all our pure functions operators.

    debounceTime: The debounceTime operator imposes a limit on how frequently backend searches can occur

    distinctUntilChanged: Only emit a value when the current value is different than the last.
                          - it's usable if the user clear the searchbox and put the same data than before

    filter: we wanna filter the term value when is empty

    Why SwitchMap???
    The main difference between switchMap and other flattening operators is the cancelling effect.
    On each emission the previous inner observable (the result of the function you supplied)
    is cancelled and the new observable is subscribed.



    */
  }

  /* Don`t trigger a network round trip (network call) on every keypress! */
  newSearch(term) {
    this.latestSearch.next(term);
  }

}

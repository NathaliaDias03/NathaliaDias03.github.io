import { Component, OnInit, Input } from '@angular/core';

import { SearchService } from '../services/search.service'
import { Router } from "@angular/router";


@Component({
  selector: 'starwars-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public result: any;
  public aux: any;
  playerName: string;
  tipoBusca: string;

  constructor(private searchService: SearchService, private router: Router) { 
    this.tipoBusca = "1";
  }

  ngOnInit() {
  }

  onSubmit() {
    this.searchService.searchMovies(this.tipoBusca, this.playerName).subscribe( result => { this.onSuccess(result) },fail => { this.onError(fail) });
  }

  getByUrl(url) {
    return this.searchService.searchByUrl(url).subscribe(result => { return result; },fail => { this.onError(fail) });
  }
  getFilmesById(endpoint) {
		return this.searchService.getFilmesById(endpoint)
  }
  getPeopleById(endpoint) {
		return this.searchService.getPeopleById(endpoint)
  }
  
  onSuccess(result){
    this.result = result;
    // if (typeof this.result.results != "undefined")
    // {
    //   this.result.results.forEach(element => {
    //     var x = 0;
    //     element.characters.forEach(c => {
    //       if (x < 3){
    //         c = this.searchService.searchByUrl(c);
    //         console.log(c.name)
    //       }
    //       x++;
    //     });
    //   });
    // }
  }

  onError(fail: any) {
    
  }




}


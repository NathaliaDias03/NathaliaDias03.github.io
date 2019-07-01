import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()

export class SearchService {
       endpoint: string;

    constructor(private http: HttpClient){
        this.endpoint = 'https://swapi.co/api/';
    }

  
    searchMovies(tipoBusca: string, searchStr: string) {
        if (tipoBusca == "1")
			return this.http.get<any>(this.endpoint + "films/?search=" + searchStr)
			
        if (tipoBusca == "2")
            return this.http.get(this.endpoint + "people/?search=" + searchStr);
    }

    searchByUrl(url) {
        return this.http.get(url);
    }

    getFilmesById(id: string): Observable<any> {
		return this.http.get<any>(id)
		  .pipe(switchMap(movie => new Observable(observer => {
			forkJoin(movie.characters.map((character: string) => this.http.get(character)))
			  .subscribe((characters: any) => {
				movie.characters = characters;
				observer.next(movie);
				observer.complete();
			  })
		  })));
    }
    
    getPeopleById(id: string): Observable<any> {
		return this.http.get<any>(id)
		  .pipe(switchMap(people => new Observable(observer => {
			forkJoin(people.films.map((films: string) => this.http.get(films)))
			  .subscribe((films: any) => {
				people.films = films;
				observer.next(people);
				observer.complete();
			  })
		  })));
	}
    
}



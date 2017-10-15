import { Component } from '@angular/core';
import { Artist } from './Artist';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'artist-search-form',
	templateUrl: './artist-search-form.component.html'
})

export class ArtistSearchFormComponent  {
	
  submitted = false;
  results: Artist[];

  constructor(private http: HttpClient) {}

  model = new Artist(0, '', '', '');

  onSubmit() { 
  	this.submitted = true; 
  	this.http.get<Artist[]>('http://localhost:8090/artist?name=' + this.model.name).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      console.log(this.results)
    });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
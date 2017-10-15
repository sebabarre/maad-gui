import { Component } from '@angular/core';

import { Artist } from './Artist';

@Component({
	selector: 'artist-search-form',
	templateUrl: './artist-search-form.component.html'
})

export class ArtistSearchFormComponent  {
	
  submitted = false;

  model = new Artist(0, '', '', '');

  onSubmit() { 
  	this.submitted = true; 
  	console.log(this.model.name)
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
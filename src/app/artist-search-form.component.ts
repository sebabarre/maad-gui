import { Component } from '@angular/core';
import { Artist } from './Artist';
import { Album } from './Album';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Component({
	selector: 'artist-search-form',
	templateUrl: './artist-search-form.component.html'
})

export class ArtistSearchFormComponent  {
	
  submitted = false;
  results: Artist[];
  albums: Album[];

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

  followThisOne(id) {
    console.log(id);
    this.http.get('http://localhost:8090/artist/add?idArtist=' + id)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  getAll() {
    this.http.get<Artist[]>('http://localhost:8090/artist/all').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      console.log(this.results)
    });
  }

  onSubmitAlbum(artist) {
    console.log(artist)
    this.http.get<Album[]>('http://localhost:8090/artist/albums?idArtist=' + artist.apiId).subscribe(data => {
      // Read the result field from the JSON response.
      this.albums = data;
    });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  toHttpParams(params) {
    return Object.getOwnPropertyNames(params)
                 .reduce((p, key) => p.set(key, params[key]), new HttpParams());
}

}
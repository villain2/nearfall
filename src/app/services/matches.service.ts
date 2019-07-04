import { Injectable } from '@angular/core';
import { Match } from '../models/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
    matches: Match[];

  constructor() {
  }

    getMatches(): Match[] {
      return this.matches;
    }

}

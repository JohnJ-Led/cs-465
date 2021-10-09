import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css'],
  providers: [TripDataService]
})
export class TripCardComponent implements OnInit {


  @Input('trip') trip: any;
  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) { }

  public editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }
  ngOnInit(): void {
  }
}

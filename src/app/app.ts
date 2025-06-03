import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FishLogService } from './fish.log.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  providers: [FishLogService],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App implements OnInit {
  constructor(private fishLogService: FishLogService) {}
  ngOnInit(): void {
    this.weatherReport$ = this.fishLogService.getData();
  }
  protected title = 'Fish Log 2';
  protected weatherReport$: Observable<any> = of([]); // Initialize with an empty observable
}


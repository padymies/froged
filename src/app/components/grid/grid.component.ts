import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat } from 'rxjs';
import { finalize, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  isLoading = false;
  data: any;
  constructor(private route: ActivatedRoute, private service: ApiService) {}

  ngOnInit(): void {
    this.data = this.route.data.pipe(
      startWith((this.isLoading = true)),
      switchMap((data: any) =>
        this.service.getData(data.query).pipe(
          map((data) => {
            this.isLoading = false;
            return data.results;
          })
        )
      )
    );
  }
}

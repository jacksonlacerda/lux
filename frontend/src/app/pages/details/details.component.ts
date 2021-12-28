import { Component, OnInit } from '@angular/core';
import { PropertiesApiService } from 'src/app/service/properties-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public details: any = []

  constructor(private propertiesApiService: PropertiesApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.propertiesApiService.propertiesDetails(id).subscribe(
      res => this.details = res,
      error => console.log(error)
    )
  }

}

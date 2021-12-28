import { Component, OnInit } from '@angular/core';
import { PropertiesApiService } from 'src/app/service/properties-api.service';
import { List } from 'src/app/models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public list: List[] = []

  constructor(private propertiesApiService: PropertiesApiService) { }

  ngOnInit(): void {
    this.propertiesApiService.propertiesList().subscribe(
      res => this.list = res,
      error => console.log(error)
    )
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface res {
  [key: number]: {
    timesTested: number;
    rotated: number;
  };
}

interface tableData {
  name: string;
  timesTested: number;
  rotated: number;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'timesTested', 'rotated'];
  datasource: tableData[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.adapt(data);
    console.log(this.datasource);
  }

  ngOnInit(): void {}

  adapt(data: res) {
    for (const [key, val] of Object.entries(data)) {
      this.datasource.push({
        name: 'Turret ' + (parseInt(key) + 1).toString(),
        timesTested: val.timesTested,
        rotated: val.rotated,
      });
    }
  }
}

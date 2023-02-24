import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import * as moment from 'moment';
import {MatDialog} from '@angular/material/dialog';
import { ReportDetailComponent } from '../dialogs/report-detail/report-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-report',
  templateUrl: './main-report.component.html',
  styleUrls: ['./main-report.component.scss'],
})
export class MainReportComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;

  @ViewChild('openDetailsCell')
  openDetailsCell: TemplateRef<any>;

  rows: any[] = [];

  temp: any[] = [];

  // columns: any = [];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) {
    this.fetch((data: any) => {
      console.log(data);
      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
    });
  }

  ngOnInit(): void {
  this.form = this.fb.group({
    start: [null, [Validators.required]],
    end: [null, [Validators.required]],
  });
  }

  getFormatDate(timestamp: number) {
    return moment(new Date(timestamp)).format('DD/MM/YYYY')
  }

  getEstadoRecoleccion(estadoRecoleccion: boolean) {
    return estadoRecoleccion ? 'Aceptado' : 'Rechazado'
  }
  consultarPorFechas(form: any){
    console.log(form)
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open(
      'GET',
      `https://70ad5317-b912-4cdb-9418-a3aa93bd2a4f.mock.pstmn.io/get_report`
    );

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  openDetails(row: any) {
    console.log('row', row)
    const dialogRef = this.dialog.open(ReportDetailComponent,{
      data: row,
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter((d: any) => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  logout() {
    sessionStorage.removeItem('loginStatus');
    this.router.navigate(['login']);
  }
}

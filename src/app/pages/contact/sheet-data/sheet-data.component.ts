import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from 'src/app/services/common/google-sheets.service';

@Component({
  selector: 'app-sheet-data',
  templateUrl: './sheet-data.component.html',
  styleUrls: ['./sheet-data.component.scss']
})
export class SheetDataComponent implements OnInit {
  data: any[] = [];

  constructor(private googleSheetsService: GoogleSheetsService) {}

  ngOnInit(): void {
    this.googleSheetsService.getData('Sheet1!A:C').subscribe({
      next: res => {
        console.log(res);
      },
      error: err=>{
        console.log(err);
        
      }
    });
  }
}

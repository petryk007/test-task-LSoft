import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-info-token',
  templateUrl: './info-token.component.html',
  styleUrls: ['./info-token.component.scss']
})
export class InfoTokenComponent implements OnInit {

  private readonly subs = new SubSink();

  public ObjInfo: any;

  constructor(
    private sharedService: SharedService
  ) {
    this.getInfo();
  }

  ngOnInit(): void {
    
  }

  getInfo(): void {
    this.subs.add(
      this.sharedService.getTokenInfo().subscribe(info => {
        console.log(this.ObjInfo);
        this.ObjInfo = info;
      })
    );
  }
}

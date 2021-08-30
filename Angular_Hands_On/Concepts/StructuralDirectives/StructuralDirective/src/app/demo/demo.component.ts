import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  public batches:string[]=["PPA","LB","LSP","Python","Angular"];
  public flag:boolean=true;

  ngOnInit(): void {
  }



}

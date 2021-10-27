import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {

    currentActive: string = "";

    constructor() { 
    }

    ngOnInit(): void {
    }

    changeActive(s: string) {
        this.currentActive = s;
    }

}

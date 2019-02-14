import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  showToastr(){
   this.toastr.success("Hello, Its ready to apply in your project.");
  }

}

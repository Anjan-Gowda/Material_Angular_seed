import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {


  constructor(private titleService: ServiceService, private router: Router) {
  }

  ngOnInit() {
    this.titleService.updateTitle('Error');

  }
  go() {
    this.router.navigate(['home']);

  }
}

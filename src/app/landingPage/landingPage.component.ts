import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  private launchApplication(): void {
    // navigate to MAIN screen
    this.router.navigate(
      [
         { outlets: { roHome: ['main']}}
      ]
    );
  }
}

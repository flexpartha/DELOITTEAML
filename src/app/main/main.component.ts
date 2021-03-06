import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // constructor
 constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
     // navigate to HOME screen
     this.router.navigate(
      [
        'landingPage'
      ],
      { relativeTo: this.route }
    );
  }

}

import { Component, OnInit  } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  currentRate = 5;
  constructor( public popoverController: PopoverController) { }

  ngOnInit() {
  }

  dismiss() {
    this.popoverController.dismiss();
  }

}

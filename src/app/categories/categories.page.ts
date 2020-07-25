import { Component, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor( public popoverController: PopoverController) { }

  ngOnInit() {
  }

  dismiss() {
    this.popoverController.dismiss();
  }
}

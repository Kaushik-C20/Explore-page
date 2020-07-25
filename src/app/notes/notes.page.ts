import { Component, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  
  dismiss() {
    this.popoverController.dismiss();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnapListComponent } from '../face-snap-list/face-snap-list.component';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService) { }


  clickSnap!: string;

  ngOnInit() {
    this.clickSnap = 'Oh snap!'; 
  }

  

  onAddSnap() {

    if (this.clickSnap === 'Oh snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.clickSnap = 'Unsnap ?';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.clickSnap = 'Oh snap!';
    }
  }

}


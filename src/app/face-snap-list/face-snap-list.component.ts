import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../sevices/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit { 
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.mySnap = this.faceSnapsService.mySnap;
    this.myOtherSnap = this.faceSnapsService.myOtherSnap;
    this.myLastSnap = this.faceSnapsService.myLastSnap; 
      
  }

}

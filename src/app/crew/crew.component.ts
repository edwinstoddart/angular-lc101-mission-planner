import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  mouseSelect: object = null;

  candidates: object[] = [
    {name: "Sally Ride",
    photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg',
    weapon: "Space Rock"},
    {name: "Mae Jemison",
    photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg',
    weapon: "Space Javelin"},
    {name: "Ellen Ochoa",
    photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg',
    weapon: "Space Onager"},
    {name: "Frederick Gregory",
    photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg',
    weapon: "Space Gun"},
    {name: "Guion Bluford",
    photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg',
    weapon: "Space Ballista"},
    {name: "Kjell Lindgren",
    photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg',
    weapon: "Space Longsword"},
    {name: "Jeanette Epps",
    photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg',
    weapon: "Space Épée"}
  ];

  constructor() { }
  ngOnInit() { }

  addCrewMember(candidate: object) {
    if (this.crew.indexOf(candidate) > -1) { this.inCrew = true; }
    if (this.crew.length < 3 && this.inCrew === false) {
      this.crew.push(candidate);
    } else if (this.inCrew) {
      this.crew.splice(this.crew.indexOf(candidate), 1);
    }
    this.inCrew = false;
  }

}

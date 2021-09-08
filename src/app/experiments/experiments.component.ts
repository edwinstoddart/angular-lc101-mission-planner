import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  approvedExperiments: string[] = [];
  constructor() { }
  ngOnInit() { }
  addExperiment(experiment: string) {
    let experimentIndex = this.approvedExperiments.indexOf(experiment);
    if (experimentIndex > -1) {
      this.approvedExperiments.splice(experimentIndex, 1);
    } else {
      this.approvedExperiments.push(experiment);
    }
  }
}

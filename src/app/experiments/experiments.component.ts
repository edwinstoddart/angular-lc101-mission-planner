import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: object[] = [
    {name: 'Mars soil sample'},
    {name: 'Plant growth in habitat'},
    {name: 'Human bone density'}
  ];
  experimentBeingEdited: object = null;

  constructor() { }
  ngOnInit() { }

  add(experiment: string) {
    this.experiments.push({name: experiment});
  };
  edit(experiment: object) {
    this.experimentBeingEdited = experiment;
  };
  save(name: string, experiment: object) {
    experiment['name'] = name;
    this.experimentBeingEdited = null;
  };
  remove(experiment: object) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  };
}

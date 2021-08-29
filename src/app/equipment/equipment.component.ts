import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: object[] = [
    {name: 'Habitat dome'},
    {name: 'Drones'},
    {name: 'Food containers'},
    {name: 'Oxygen tanks'}
  ];
  itemBeingEdited: object = null;

  constructor() { }
  ngOnInit() { }

  add(item: string) {
    this.equipment.push({name: item});
  }
  edit(item: object) {
    this.itemBeingEdited = item;
  }
  save(name: string, item: object) {
    item['name'] = name;
    this.itemBeingEdited = null;
  }
  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent {
  allLists: any = []
  list:any=''


  // handleList(event: any) {
  //   console.log("value", event.target.value)
  //  this.list = (event.target as HTMLInputElement).value;
  //   console.log('Input value:',  this.list);
  // }

  onSubmit() {
    console.log(this.list)
    this.allLists.push(this.list)
    this.list=''
  }
}

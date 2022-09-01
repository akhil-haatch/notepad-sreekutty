import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  content: any
  showDiv: boolean = false
  contentArray: any[] = []
  contentFromService: any[] = []
  contentFromLocalstorage: any
  indexFromClickingEditingIcon: any
  term: any
  isSaveEditClicked:boolean = false
  notesArray: any;

  constructor() { }

  ngOnInit(): void {

    if (localStorage.getItem("note") != null) {
      this.contentFromLocalstorage = localStorage.getItem("note");
      this.contentArray = JSON.parse(this.contentFromLocalstorage);
      this.showDiv = true
    }
  }
  createNote(): void {
    this.contentArray.push(this.content)
    this.notesArray = {...this.contentArray}
    this.content = '';
    if (this.contentArray.length != 0) {
      this.showDiv = true
    }
  }
  saveBtnClicked() {
    localStorage.setItem("note", JSON.stringify(this.contentArray));
  }
  deleteBtnClicked(div: any) {
    this.contentArray.splice(div, 1);
  }
  editBtnClicked(item: any , index:any) {
    this.indexFromClickingEditingIcon = index
    this.content = item;
    this.isSaveEditClicked = true
  }
  saveEditBtnClicked() {
    this.contentArray[this.indexFromClickingEditingIcon] = this.content; 
    this.isSaveEditClicked = false;
    this.content = '';
  }
  search(){
      if(this.term != ""){
     this.contentArray = this.contentArray.filter((res: any) => {
      return res.toLowerCase().match(this.term.toLowerCase()) 
    })
    } else {
      this.ngOnInit();
    }
  }
}


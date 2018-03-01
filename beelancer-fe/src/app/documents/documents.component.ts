import { Component, OnInit } from '@angular/core';
import { Document } from './document';
@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
  	{
  		title: "My frist Doc",
  		description: "This is description",
  		file_url: "sdsadasd",
  		updated_at: "11/11/16",
  		image_url: "asdasdasdasd",

  	},
  		{
  		title: "My second Doc",
  		description: "This is description",
  		file_url: "sdsadasd",
  		updated_at: "11/11/16",
  		image_url: "asdasdasdasd",

  	},
  		{
  		title: "My third Doc",
  		description: "This is description",
  		file_url: "sdsadasd",
  		updated_at: "11/11/16",
  		image_url: "asdasdasdasd",

  	}
  ]
}

import { Component, OnInit } from '@angular/core';
import { ApiserivceService } from '../apiserivce.service';

@Component({
  selector: 'app-viewallnews',
  templateUrl: './viewallnews.component.html',
  styleUrls: ['./viewallnews.component.css']
})
export class ViewallnewsComponent implements OnInit {

  constructor(private api:ApiserivceService) { this.datafromApi()}

  datafromApi=()=>{
this.api.fetchnews().subscribe(
  (Response:any)=>{
    this.news=Response.articles
  }
)
  }


  news:any=[]

  ngOnInit(): void {
  }

}

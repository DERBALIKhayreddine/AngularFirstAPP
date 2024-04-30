import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  endpointURl='http://localhost:3000/articles'


  constructor(private http:HttpClient) {

   }

  getAllService():Observable<Article[]>{
    return this.http.get<Article[]>(this.endpointURl)
  }
  addArticle(data:Article){
    return this.http.post(this.endpointURl,data)
  }

  getArticle(id:any){
    return this.http.get(`http://localhost:3000/articles?id=${id}`)
  }
  editArticle(data: Article): Observable<Article> {
    return this.http.put<Article>(`http://localhost:3000/articles/${data.id}`, data);
  }

  deleteArticle(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/articles/${id}`);
  }
}

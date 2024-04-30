import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/models/Article';
import { ArticleService } from 'src/service/article.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AddArticleComponent } from './actions/add-article/add-article.component';
import { EditArticleComponent } from './actions/add-article/edit-article/edit-article.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit,AfterViewInit {
  articles: Article[] = [];
  displayedColumns: string[] = ['id', 'titre', 'type', 'date', 'source','actions'];
  dataSource: MatTableDataSource<Article> = new MatTableDataSource(this.articles);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private articleService: ArticleService ,private dialog:MatDialog ) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllArticles() {
    this.articleService.getAllService().subscribe((result) => {
      this.articles = result;
      this.dataSource = new MatTableDataSource<Article>(this.articles);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddArticleComponent,
       {
        width:'500px',
        height:"500px"
    });
}

onDelete(id: string): void {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: '200px',
    width: '300px',

  });
  dialogRef.afterClosed().subscribe((x) => {
    if (x) {
      this.articleService.deleteArticle(id).subscribe(() => {
      });
    }
  });
}


openEditDiag(id: any) : void {
  const selectedArticle = this.articles.find(article => article.id === id);
  if (selectedArticle) {
    const dialogRef = this.dialog.open(EditArticleComponent, {
      width: '500px',
      height: '500px',
      data: selectedArticle // Pass only the selected article
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.articleService.editArticle(result).subscribe(() => this.articleService.getAllService());
      }
    });
  }
}

}

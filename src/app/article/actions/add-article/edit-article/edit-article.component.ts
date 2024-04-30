import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Article } from 'src/models/Article';
import { ArticleService } from 'src/service/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {
  article: Article;

  constructor(
    private articleService: ArticleService,
    private dialogRef: MatDialogRef<EditArticleComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Article
  ) {
    // Initialize article with the data received
    this.article = { ...data };
  }

  onSubmit() {
    this.dialogRef.close(this.article);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ArticleService } from 'src/service/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddArticleComponent>,
    private As:ArticleService
  ) {
    this.articleForm = this.formBuilder.group({
      titre: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required],
      source: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.articleForm.valid) {
      const formData = this.articleForm.value; // Extract form data
      this.As.addArticle(formData).subscribe(() => {
        console.log('Article added successfully.');
        this.dialogRef.close();
      }, error => {

        console.error('Error adding article:', error);
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-sponsoren-kontakt-formular',
  templateUrl: './sponsoren-kontakt-formular.component.html',
  styleUrls: ['./sponsoren-kontakt-formular.component.scss']
})
export class SponsorenKontaktFormularComponent implements OnInit {

  public form: FormGroup;

  public isLoading = false;

  public showError = false;
  public errorMessage = '';

  public showSuccess = false;

  constructor(private fb: FormBuilder,
    private emailService: EmailService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.minLength(5)]],
      dsgvo: [false, [Validators.requiredTrue]]
    });
  }

}

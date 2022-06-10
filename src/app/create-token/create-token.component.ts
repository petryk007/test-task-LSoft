import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { BlockchainControl, CompanyControl } from './main.enum';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.scss']
})
export class CreateTokenComponent implements OnInit {

  createForm: FormGroup;
  companyControl = CompanyControl;
  blockchainControl = BlockchainControl;

  constructor(
    private sharedService: SharedService,
    private readonly router: Router
  ) {
    this.generationForm()
  }

  ngOnInit(): void {
    
  }

  get f() { return this.createForm.controls; }

  generationForm(): void {
    this.createForm = new FormGroup({
      company: new FormControl('', Validators.required),
      tokenName: new FormControl('', Validators.required),
      symbol: new FormControl('', Validators.required),
      maximumTokenSupply: new FormControl(null, Validators.required),
      blockchain: new FormControl(this.blockchainControl[0], Validators.required),
      supply: new FormControl(false, Validators.required)
    });
  }

  saveDraft(): void {
    if (!this.createForm.invalid) {
      this.sharedService.setTokenInfo(this.createForm.value);
      this.sharedService.isUseInfo = true;
      this.router.navigate(['/info-token']);
    }
  }

}

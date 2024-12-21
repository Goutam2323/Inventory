import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductFormService } from './product-form.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  categories = [
    'Washing Machine',
    'AC',
    'Water Purifier',
    'Kiosk',
    'Refrigerator',
    'Microwave/Oven',
    'Chimney',
    'Television',
    'Geyser',
    'Dishwasher',
    'Cooler',
    'Speaker',
    'Flour Mill',
    'Fan',
    'Dehumidifier',
  ];
  subcategories: string[] = [];
  brands = ['Whirlpool', 'Samsung', 'LG', 'Godrej'];
  hsnCodes = ['5%', '8%', '12%', '18%'];

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private productFormService: ProductFormService
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      partModel: ['', Validators.required],
      partName: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      brand: ['', Validators.required],
      hsnCode: ['', Validators.required],
      costPrice: ['', [Validators.required, Validators.min(0)]],
      mrp: ['', [Validators.required, Validators.min(0)]],
      discount: ['', [Validators.required, Validators.min(0)]],
      sellingPrice: ['', [Validators.required, Validators.min(0)]],
      warrantyPeriod: ['', [Validators.required, Validators.min(0)]],
      minStockUnit: ['', [Validators.required, Validators.min(0)]],
      minOrderUnit: ['', [Validators.required, Validators.min(0)]],
      maxOrderUnit: ['', [Validators.required, Validators.min(0)]],
      partUsedFor: ['', Validators.required],
      launchYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]], // Year validation
      isReturnable: ['', Validators.required],
      avatar: [''], // No validation for avatar
    });
  }

  get f() {
    return this.productForm.controls;
  }

  onCategoryChange(): void {
    const selectedCategory = this.productForm.get('category')?.value;
    switch (selectedCategory) {
      case 'Refrigerator':
        this.subcategories = ['Double Door', 'Single Door'];
        break;
      case 'AC':
        this.subcategories = ['Split', 'Window'];
        break;
      case 'Washing Machine':
        this.subcategories = ['Front Load', 'Top Load'];
        break;
      case 'Water Purifier':
        this.subcategories = ['RO', 'UV'];
        break;
      // Add more categories as needed
      default:
        this.subcategories = [];
        break;
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.productForm.invalid) {
      const firstInvalidField = Object.keys(this.productForm.controls).find(
        (key) => this.productForm.controls[key].invalid
      );
      const element = document.querySelector(`[formControlName="${firstInvalidField}"]`);
      element?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    this.productFormService.sendData(this.productForm.value).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }

  onReset(): void {
    this.productForm.reset();
    this.subcategories = [];
    this.submitted = false;
  }
}

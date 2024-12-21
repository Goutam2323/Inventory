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
    'Microwave/Owen',
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
      launchYear: ['', Validators.required],
      isReturnable: ['', Validators.required],
      avatar: [''],
    });
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
      case 'Kiosk':
        this.subcategories = ['Kiosk'];
        break;
      case 'Microwave/Owen':
        this.subcategories = ['Microwave', 'Oven'];
        break;
      case 'Chimney':
        this.subcategories = ['Chimney'];
        break;
      case 'Television':
        this.subcategories = ['LED', 'LCD'];
        break;
      case 'Geyser':
        this.subcategories = ['Electric', 'Gas'];
        break;
      case 'Dishwasher':
        this.subcategories = ['Dishwasher'];
        break;
      case 'Cooler':
        this.subcategories = ['Personal', 'Commercial'];
        break;
      case 'Speaker':
        this.subcategories = ['Speaker'];
        break;
      case 'Flour Mill':
        this.subcategories = ['Flour Mill'];
        break;
      case 'Fan':
        this.subcategories = ['Fan'];
        break;
      case 'Dehumidifier':
        this.subcategories = ['Dehumidifier'];
        break;
      default:
        this.subcategories = [];
        break;
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productFormService.sendData(this.productForm.value).subscribe(
        (response) => {
          console.log('Data sent successfully:', response);
        },
        (error) => {
          console.error('Error sending data:', error);
        }
      );
    } else {
      alert('form not submitted');
    }
  }

  onReset(): void {
    this.productForm.reset();
    this.subcategories = [];
  }
}

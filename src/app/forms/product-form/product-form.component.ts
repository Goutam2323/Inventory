export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  categories = ['Washing Machine', 'AC' , 'Water Purifier' , 'Kiosk' , 'Refrigerator' , 'Microwave/Owen' , 'Chimney' , 'Television' , 'Geyser' , 'Dishwasher' , 'Cooler' , 'Speaker' , 'Flour Mill' , 'Fan' , 'Dehumidifier' , 'Health Care Device' , 'Kitchen' , 'Induction' , 'Commercial Cooler' , 'Personal Cooler', 'Residential Cooler' , 'Camera' , 'Interactive Panel' , 'Home Improvement' , 'Water Dispensor' , 'Vaccum Cleaner' , 'Sports & Fitness' , 'Printer' , 'Mobile' , 'Laptop' , 'Home' , 'Lifestyle'];
  subcategories: string[] = [];
  brands = ['Whirlpool', 'Samsung', 'LG', 'Godrej'];
  hsnCodes = ['5%', '8%', '12%', '18%'];
  partUsedForOptions = ['Brands', 'Serviz'];

  constructor(private fb: FormBuilder) {}

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
      partUsedFor: ['', Validators.required],
      description: ['']
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
      case 'Kiosk':
         this.subcategories = ['kiosk'];
      case 'Microwave/Owen':
        this.subcategories = ['Microwave', 'Oven'];
      case 'Chimney':
         this.subcategories = ['Chimney'];
      case 'Television':
        this.subcategories = ['LED', 'LCD'];
      case 'Geyser':
        this.subcategories = ['Electric', 'Gas'];
      case 'Dishwasher':
        this.subcategories = ['Dishwasher'];
      case 'Cooler':
        this.subcategories = ['Personal', 'Commercial'];
      case 'Speaker':
        this.subcategories = ['Speaker'];
      case 'Flour Mill':
        this.subcategories = ['Flour Mill'];
      case 'Fan':
        this.subcategories = ['Fan'];
      case 'Dehumidifier':
        this.subcategories = ['Dehumidifier'];
      default:
        this.subcategories = [];
        break;
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Form submitted:', this.productForm.value);
      alert('Form submitted successfully!');
    }
  }

  onReset(): void {
    this.productForm.reset();
    this.subcategories = [];
  }
}

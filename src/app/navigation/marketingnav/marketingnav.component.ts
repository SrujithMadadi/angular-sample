import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';






@Component({
  selector: 'app-marketingnav',
  templateUrl: './marketingnav.component.html',
  styleUrls: ['./marketingnav.component.css']
})
export class MarketingnavComponent implements OnInit {
  
   columnDefs;
   rowData; 
   

  d1;

  formVar: FormGroup;
  
  gridValue:Array<details>=[];
 

  constructor(private _fb: FormBuilder) {
    this.createForm();
    
    this.columnDefs = [
      {
        headerName: "Make",
        field: "make"
      },
      {
        headerName: "Model",
        field: "model"
      },
      {
        headerName: "Price",
        field: "price",
        filter: "agNumberColumnFilter"
      }
    ];
    this.rowData = [
      {
        id: "aa",
       
      },
      {
        id: "bb",
        make: "Ford",
        model: "Mondeo",
        price: 32000
      },
      {
        id: "cc",
        make: "Porsche",
        model: "Boxter",
        price: 72000
      },
      {
        id: "dd",
        make: "BMW",
        model: "5 Series",
        price: 59000
      },
      {
        id: "ee",
        make: "Dodge",
        model: "Challanger",
        price: 35000
      },
      {
        id: "ff",
        make: "Mazda",
        model: "MX5",
        price: 28000
      },
      {
        id: "gg",
        make: "Horse",
        model: "Outside",
        price: 99000
      }
    ];
   
    
  }


  createForm() {
    this.addForm = this._fb.group({
      itemRows: this._fb.array([])
    });
    this.addForm.setControl('itemRows', this._fb.array([]));
  }
  

  addForm: FormGroup;
  initItemRows() {
    return this._fb.group({

      itemname: ['']
    });
  }
 

  ngOnInit() {

    this.formVar = this._fb.group({
      Date: '',
      VendorOName: '',
      VendorcontactPerson: '',
      Ex: '',
      ContactNumber: '',
      ContactEmailId: '',
      Status: '',
      Imppatner: '',
      Client: '',
      Comment: '',});
    


    

  }
  onSubmit() {
    console.log(this.formVar.value);
    this.d1=new details();
this.d1.Date=this.formVar.value.Date;
this.d1.vendorName=this.formVar.value.VendorOName;
this.d1.vendorContactPerson=this.formVar.value.VendorcontactPerson;
this.d1.contactNumber=this.formVar.value.ContactNumber;
this.d1.client=this.formVar.value.Client;
this.d1.status=this.formVar.value.Status;

  this.gridValue.push(this.d1);
 

  }
}

class details
{
  Date:string;
  vendorName:string;
  vendorContactPerson:string;
  contactNumber:string
  contactEmailId:string
      status:string
      imppatner:string
      client:string
      comment:string

}


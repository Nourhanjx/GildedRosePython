import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { SnackbarService } from '../../../../@shared/pages/snackbar/snackbar.service';
import { ConfirmDialogService } from '../../../../@shared/pages/dialogs/confirm-dialog/confirm.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../@core/services/api.service';
import { Subscription } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-items-update',
  templateUrl: './items-update.component.html',
  styleUrls: ['./items-update.component.scss'],
})
export class ItemsUpdateComponent implements OnInit, OnDestroy {
  images = [];
  old_images = [];
  itemsForm: FormGroup;
  data: {};
  isLoadingResults = false;
  isLoadingImages = false;
  itemID;
  subcat;
  options = {
    title: 'Are Sure To Submit & Update This Part  ',
    message:
      'Because in case to Continue you will not be able to update them in this time',
    cancelText: 'Cancel And Review this Data',
    confirmText: 'Confirm And Continue',
  };
  date = new Date(2020, 1, 1);
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  filteredOptions;
  @ViewChild('locationSpanlat') locationSpanlat: ElementRef;
  @ViewChild('locationSpanlan') locationSpanlan: ElementRef;
  @ViewChild('locationSpan') locationSpan: ElementRef;
  /****************** constructor Function************************/
  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private dialogService: ConfirmDialogService,
    public datepipe: DatePipe,
    private router: Router,
    private actRoute: ActivatedRoute,
    private itemService: ApiService,
    private http: HttpClient
  ) {}

  /****************** ngOnInit Function************************/
  ngOnInit(): void {
    this.actRoute.data.subscribe((res) => {
      this.data = res['item'];
      this.old_images = res['item']['images'];
      this.itemID = this.data['id'];
      this.subcat = this.data['subcat_id'];
    });
    this.itemsForm = this.fb.group({
      name: [this.data['name'], [Validators.required, Validators.minLength(3)]],

      date: [this.data['date'], [Validators.required]],
    });
  }

  /****************** Delete image from images retrived from server Function************************/
  deleteItem(id) {
    // for (let i = 0; i < this.old_images.length; i++) {
    //   if (this.old_images[i][0]['id'] === id) {
    //     this.old_images.splice(i, 1);
    //   }
    // }
  }

  /****************** Submit Function************************/
  onSubmit() {
    // let AllImages = [];
    // let newDate = this.itemsForm.get('date').value;
    // newDate = this.datepipe.transform(newDate, 'yyyy-MM-dd');
    // if (this.old_images.length > 0) {
    //   for (let i = 0; i < this.old_images.length; i++) {
    //     AllImages.push(this.old_images[i][0]['src']);
    //   }
    // }
    // if (this.images.length > 0) {
    //   for (let i = 0; i < this.images.length; i++) {
    //     AllImages.push(this.images[i]);
    //   }
    // }
    // this.data = {
    //   name: this.itemsForm.get('name').value,
    //   location: this.itemsForm.get('location').value,
    //   des: this.itemsForm.get('des').value,
    //   date: newDate,
    //   images: AllImages,
    // };
    // if (this.itemsForm.get('location').value !== this.data['location']) {
    //   this.data['lat'] = parseFloat(
    //     this.locationSpanlat.nativeElement.innerHTML
    //   );
    //   this.data['lan'] = parseFloat(
    //     this.locationSpanlan.nativeElement.innerHTML
    //   );
    // } else {
    //   this.data['lat'] = this.data['lat'];
    //   this.data['lan'] = this.data['lan'];
    // }
    // this.dialogService.open(this.options);
    // this.dialogService.confirmed().subscribe((confirmed) => {
    //   if (confirmed) {
    //     this.isLoadingResults = true;
    //     this.itemService.updateItem(this.itemID, this.data, 'items').subscribe(
    //       (next) => {
    //         this.isLoadingResults = false;
    //         this.snackbarService.show('Item Updated successfully', 'success');
    //         this.router.navigateByUrl('/items/upoptions', {
    //           state: {
    //             id: this.subcat,
    //             item_id: this.itemID,
    //           },
    //         });
    //       },
    //       (err) => {
    //         console.log('err :', err);
    //         this.isLoadingResults;
    //         this.snackbarService.show(err['error']['errors']['name'], 'danger');
    //       }
    //     );
    //   }
    // });
  } //end of submit

  /****************** ngOnDestroy Function************************/
  ngOnDestroy() {} //end of ngOnDestroy
} //end of Class

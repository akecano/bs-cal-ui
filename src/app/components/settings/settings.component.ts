import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { GenericSnackBarService } from 'src/app/services/generic-snack-bar.service';
import { TurretService } from 'src/app/services/turret.service';
import { ResultsComponent } from '../results/results.component';
import { RunComponent } from '../run/run.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  turretForm: FormGroup = this.fb.group({
    turrets: this.fb.array([]),
  });
  sequence: Array<number> = [];
  turretCount: number = 5;
  configSet: boolean = false;

  constructor(
    private fb: FormBuilder,
    private turretService: TurretService,
    private snackBar: GenericSnackBarService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initialiseForm();
  }

  get turrets() {
    return this.turretForm.get('turrets') as FormArray;
  }

  initialiseForm() {
    for (let i = 0; i < this.turretCount; i++) {
      this.turrets.push(this.initialiseTurretSetting());
    }
  }

  initialiseTurretSetting(): FormGroup {
    return this.fb.group({
      caliber: ['', Validators.required],
      location: ['', Validators.required],
      startRotation: ['', Validators.required],
      endRotation: ['', Validators.required],
    });
  }

  onSubmit(formDirective: FormGroupDirective): void {
    if (this.turretForm.valid) {
      this.turretService
        .submitSettings({
          sequence: this.sequence,
          turrets: this.turretForm.value.turrets,
        })
        .subscribe(
          (res) => {},
          (err) => {
            console.log('HTTP Error', err);
            this.snackBar.openSnack('ERROR: Something went wrong.');
            this.configSet = false;
          },
          () => {
            this.snackBar.openSnack('Calibration set!');
            // Set form to disabled.
            // this.resetSdsForm();
            this.configSet = true;
            this.turretForm.disable();
          }
        );
    } else {
      this.snackBar.openSnack('ERROR: Check required fields.');
    }
  }

  addToSequence(tur: number) {
    this.sequence.push(tur);
  }

  resetSequence() {
    this.sequence = [];
  }

  runCalibration() {
    this.turretService.runCalibration().subscribe((res) => {
      this.openDialog(res);
    });
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(ResultsComponent, {
      data: data,
      height: '400px',
      width: '600px',
    });
  }
}

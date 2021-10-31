import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class GenericSnackBarService {
  openSnack(message: string) {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.panelClass = ['snack-bar'];

    this.snackBar.open(message, 'DONE', config);
  }

  constructor(private snackBar: MatSnackBar) {}
}

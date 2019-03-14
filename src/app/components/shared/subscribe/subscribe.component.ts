import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const STATE_KEY_SUBSCRIBE = makeStateKey('subscribe');

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * Math.floor(max)) + min;
}

enum FormState {
  Pristine,
  Invalid,
  Loading,
  Error,
  Submitted,
}

@Component({
  selector: 'subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  palette: number;
  form: FormGroup;
  formState: FormState = FormState.Pristine;

  constructor(private apiService: ApiService, private state: TransferState) {
    this.palette = state.get(STATE_KEY_SUBSCRIBE, randomInt(1, 5));
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit() {}

  keyup(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.subscribe();
    }
  }

  async subscribe(): Promise<void> {
    if (this.form.invalid) {
      this.formState = FormState.Invalid;
      return;
    }

    this.formState = FormState.Loading;
    try {
      await this.apiService.subscribe(this.form.controls.email.value);
      this.formState = FormState.Submitted;
    } catch (e) {
      console.log(e);
      this.formState = FormState.Error;
    }
  }

  messageForState(state: FormState): string {
    switch (state) {
      case FormState.Pristine:
        return 'Subscribe';
      case FormState.Invalid:
        return 'Invalid Email 😭';
      case FormState.Loading:
        return 'Thinking 🤔';
      case FormState.Error:
        return 'Oops, Please Try Again 😈';
      case FormState.Submitted:
        return 'Thanks! 🤗';
    }
  }

  enabledForState(state: FormState): boolean {
    switch (state) {
      case FormState.Pristine:
      case FormState.Invalid:
      case FormState.Error:
        return true;
      case FormState.Loading:
      case FormState.Submitted:
        return false;
    }
  }
}

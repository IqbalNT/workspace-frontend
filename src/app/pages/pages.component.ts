import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UserInfo } from '../auth/models/auth.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  userInfo: UserInfo;
  authSub: Subscription;

  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.authSub = this.authService.authInfo.subscribe((info) => {
      if (info.isAuthenticated) {
        this.userInfo = info.userInformation;
      }
    });
  }
  onLogOut(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}

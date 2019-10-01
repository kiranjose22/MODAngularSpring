import { Component, OnInit } from '@angular/core';
import { LoginprocessService } from '../loginprocess.service';
import { DataReaderService } from '../data-reader.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-trainermenu',
  templateUrl: './trainermenu.component.html',
  styleUrls: ['./trainermenu.component.css']
})
export class TrainermenuComponent implements OnInit {

  currentUser
  currentUserData
  completedUserData
  loggedin
  registrationForm

  constructor(
    private loginProcess: LoginprocessService,
    // private navbar: NavbarComponent
    private dataReader: DataReaderService,
    private route: Router
  ) {

    this.dataReader.getJSON('completed-trainings.json').subscribe(data => {
      console.log(data);
      this.completedUserData = data
    });
    this.dataReader.getJSON('current-trainings.json').subscribe(data => {
      console.log(data);
      this.currentUserData = data
    });

    this.registrationForm = new FormGroup({
      userName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      // newpassword: new FormControl(''),
      experience: new FormControl(''),
      timezone: new FormControl('undefined'),
      timeslot: new FormControl('undefined'),

      linkedin: new FormControl(''),
      skills: new FormControl(''),
      videos: new FormControl(''),
      blogs: new FormControl(''),
      ppts: new FormControl(''),
      demos: new FormControl(''),

      role: new FormControl('mentor')
    });




  }

  ngOnInit() {


    this.currentUser = this.loginProcess.getCurrentUser();
    this.loggedin = this.loginProcess.loggedin;
    if (!this.loggedin)
      this.route.navigate(['/login']);
    this.registrationForm.patchValue(this.currentUser);

  }

}

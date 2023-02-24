import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim = "your perfect Banming partner"
  acnt = "enter your ac num"
  acno = ''
  password = ''

  userDetails: any = {
    1000: { acno: 1000, username: "sari", password: 123, balance: 25000 },
    1001: { acno: 1001, username: "arsha", password: 123, balance: 55000 },
    1002: { acno: 1002, username: "sathwika", password: 123, balance: 5000 },
    1003: { acno: 1003, username: "seshma", password: 123, balance: 305000 },
    1004: { acno: 1004, username: "nidheesh", password: 123, balance: 2500000 },
    1005: { acno: 1005, username: "tuttu", password: 123, balance: 105000 },

  }

  constructor() { }

  ngOnInit(): void {

  }
  // login() {
  //   var acnum = this.acno
  //   var psw = this.password
  //   let userDetails = this.userDetails

  //   if (acnum in userDetails) {
  //     if (psw == userDetails[acnum]['password']) {
  //       alert('login successfull')
  //     }
  //     else {
  //       alert('incorrect pswd')
  //     }
  //   }
  //   else {
  //     alert('user Doesnot exist')
  //   }
  // }
  login(a:any,b:any) {


    var acnum = a.value
    var psw = b.value
    let userDetails = this.userDetails

    if (acnum in userDetails) {
      if (psw == userDetails[acnum]['password']) {
        alert('login successfull')
      }
      else {
        alert('incorrect pswd')
      }
    }
    else {
      alert('user Doesnot exist')
    }
  }


  acChange(event: any) {
    this.acno = event.target.value
    console.log(event.target.value);
  }
  psChange(event: any) {
    this.password = event.target.value
    console.log(this.password);
  }
}

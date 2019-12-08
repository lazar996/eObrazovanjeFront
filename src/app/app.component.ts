import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialog } from './dialogs/login.dialog';
import { AuthenticationService } from './security/authentication.service';
import { PasswordDialog } from './dialogs/password.dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public dialog:MatDialog,private authService:AuthenticationService){}
  
  loggedIn:boolean=false;
  currentUser;
  role:string;

  ngOnInit(): void {
    this.loggedIn=this.authService.isLoggedIn();
    if(this.loggedIn){
      this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
      this.role = this.authService.getRole();
    }
  }

  title = 'eObrazovanjeFront';

  openLoginDialog():void{
    const dialogRef = this.dialog.open(LoginDialog,{
      width:'350px'
    });

    dialogRef.afterClosed().subscribe(resoult=>
      {
        if(resoult=="success"){
          this.loggedIn=true;
        }
      })
    
  }

  promenaLozinke():void{
    const dialogRef = this.dialog.open(PasswordDialog,{width:'350px'});
    dialogRef.afterClosed().subscribe(
      resoult=>{
        if(resoult=="success"){
          this.odjava();
        }
      }
    )
  }

  odjava(){
    localStorage.clear();
    this.loggedIn=false;
    location.reload();
  }
}

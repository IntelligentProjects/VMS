import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private registerService: RegisterService, private storage: Storage) { }

  ngOnInit() {
  }

  register(form)
  {
  const fullname = form.value.fullname;
  const phone = form.value.phone;
  const email = form.value.email;
  const password = form.value.Password;
  const repassword = form.value.repeatPassword;

  console.log('pas','coming');

  if(password!="" && password!=null && repassword!="" && repassword !=null)
  {
    if(password !== repassword)
    {
      console.log('not','not equals password');
    }else{
      console.log('right matches','matches');
      this.registerService.registeration(fullname, phone, email, password).subscribe(
        data => {
          
          if(data['status']==200)
          {
            console.log(data['status']);
            console.log('loggedin');
            this.storage.set('LOG_INFO', true );
          }
          else{
            this.storage.set('LOG_INFO', false );
            console.log(data['status']);
            console.log('not loggedin');
          }
        }
      );
    }
  }
  else{
    console.log('password','null');
  }

  }

}

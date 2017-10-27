/* tslint:disable:no-unused-variable */

/*import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});*/
print(){
  console.log(this.Username+":"+this.Password);
  service.login({username: this.Username, password: this.Password})

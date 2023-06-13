import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/api/api.service';
import { UsersComponent } from './users.component';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let service: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      providers: [ApiService],
      imports: [HttpClientModule]
    })
    .compileComponents(); //join html and TS
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data from server', ()=>{
    const users = ["Tim", "Mark"];
    service = fixture.debugElement.injector.get(ApiService);
    //service = TestBed.get(ApiService);
    spyOn(service, /*method name of service*/ "getUsers").and.returnValue(of(users));
    fixture.detectChanges();
    expect(component.users).toEqual(users);
  })
});

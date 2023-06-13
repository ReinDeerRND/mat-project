import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InfoComponent } from './info.component';
class RouterStub  {
  navigate(path: any[]){}
}

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComponent],
      providers: [{
        provide: Router, useClass: RouterStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should defined', () => {
    expect(component).toBeDefined();
  });

  it('should render correct amount of agreed people', ()=>{
    let checkNumber = 50;
    component.amount = checkNumber;
    fixture.detectChanges();
    let htmlElement = fixture.debugElement.query(By.css(".amount-box"));
    let htmlResult: HTMLElement = htmlElement.nativeElement;
    expect(htmlResult.textContent).toContain(checkNumber.toString());
  });

  it('should increment amount by click', ()=>{
    let checkNumber = 50;
    component.amount = checkNumber;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css(".btn"));
    btn.triggerEventHandler('click', {/* data*/ })
    expect(component.amount).toBe(checkNumber+1);
  });

  it('fn goToUsers should be called with params', ()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.goToUsers();
    expect(spy).toHaveBeenCalledWith(['/users']);
  })

});

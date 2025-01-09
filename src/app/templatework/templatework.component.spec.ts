import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateworkComponent } from './templatework.component';

describe('TemplateworkComponent', () => {
  let component: TemplateworkComponent;
  let fixture: ComponentFixture<TemplateworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngatlanjainkComponent } from './ingatlanjaink.component';

describe('IngatlanjainkComponent', () => {
  let component: IngatlanjainkComponent;
  let fixture: ComponentFixture<IngatlanjainkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngatlanjainkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngatlanjainkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

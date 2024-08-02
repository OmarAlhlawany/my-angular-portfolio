import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjFolioComponent } from './proj-folio.component';

describe('ProjFolioComponent', () => {
  let component: ProjFolioComponent;
  let fixture: ComponentFixture<ProjFolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjFolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

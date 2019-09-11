import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtTreeComponent } from './ft-tree.component';

describe('FtTreeComponent', () => {
  let component: FtTreeComponent;
  let fixture: ComponentFixture<FtTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

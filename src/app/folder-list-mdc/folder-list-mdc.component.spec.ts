import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderListMdcComponent } from './folder-list-mdc.component';

describe('FolderListMdcComponent', () => {
  let component: FolderListMdcComponent;
  let fixture: ComponentFixture<FolderListMdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderListMdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderListMdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

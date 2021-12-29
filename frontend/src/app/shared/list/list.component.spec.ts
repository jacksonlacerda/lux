import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { List } from '../../models/list';
import { MOCK_LISK_LIST } from '../../service/list.mock';
import { PropertiesApiService } from '../../service/properties-api.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: PropertiesApiService;

  const mockList: List[] = MOCK_LISK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(PropertiesApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('(U) should properties list', () => {
    spyOn(service, 'propertiesList').and.returnValue(of(mockList))
    component.ngOnInit()
    fixture.detectChanges()
    expect(service.propertiesList).toHaveBeenCalledWith()
    expect(component.list[0].id).toEqual(1)
    expect(component.list[0].region).toEqual('Moema')
    expect(component.list[0].area).toEqual(80)
    expect(component.list[0].bedrooms).toEqual(3)
    expect(component.list[0].type).toEqual('Apartamento')
    expect(component.list[0].price).toEqual(850000)
    expect(component.list[0].img1).toEqual("../assets/img/prop-1.jpg")
    expect(component.list[0].img2).toEqual("../assets/img/prop-2.jpg")
    expect(component.list[0].img3).toEqual("../assets/img/prop-3.jpg")

    expect(component.list[3].id).toEqual(4)
    expect(component.list[3].region).toEqual('Jardins')
    expect(component.list[3].area).toEqual(86)
    expect(component.list[3].bedrooms).toEqual(2)
    expect(component.list[3].type).toEqual('Apartamento')
    expect(component.list[3].price).toEqual(1100000)
    expect(component.list[3].img1).toEqual("../assets/img/prop-10.jpg")
    expect(component.list[3].img2).toEqual("../assets/img/prop-11.jpg")
    expect(component.list[3].img3).toEqual("../assets/img/prop-12.jpg")
  })

  it('(I) should properties list', () => {
    spyOn(service, 'propertiesList').and.returnValue(of(mockList))
    component.ngOnInit()
    fixture.detectChanges()

    let item = fixture.debugElement.nativeElement.querySelectorAll('.prop')
    let region = fixture.debugElement.nativeElement.querySelectorAll('.region-text')
    let price = fixture.debugElement.nativeElement.querySelectorAll('.price-text')
    let infoText01 = fixture.debugElement.nativeElement.querySelectorAll('#info-text-01')
    let infoText02 = fixture.debugElement.nativeElement.querySelectorAll('#info-text-02')
    expect(item.length).toEqual(10)

    expect(region[0].textContent.trim()).toEqual('Moema')
    expect(price[0].textContent.trim()).toEqual('R$850,000.00')
    expect(infoText01[0].textContent.trim()).toEqual('Apartamento com 3 quartos à Venda')
    expect(infoText02[0].textContent.trim()).toEqual('80m² - 3 Quartos - Apartamento')

    expect(region[3].textContent.trim()).toEqual('Jardins')
    expect(price[3].textContent.trim()).toEqual('R$1,100,000.00')
    expect(infoText01[3].textContent.trim()).toEqual('Apartamento com 2 quartos à Venda')
    expect(infoText02[3].textContent.trim()).toEqual('86m² - 2 Quartos - Apartamento')
  })
});

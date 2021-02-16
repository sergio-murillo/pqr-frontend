import { TestBed } from '@angular/core/testing';

import { TestingModule } from '@src/test-helpers/testing.module';
import { ServiceWorkerService } from './service-worker.service';

describe('ServiceWorkerService', () => {
  let service: ServiceWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [ServiceWorkerService],
    });

    service = TestBed.inject(ServiceWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should force and check update', () => {
    service.forceUpdate();
    service.checkForUpdate();
  });
});

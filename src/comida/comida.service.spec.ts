import { Test, TestingModule } from '@nestjs/testing';
import { ComidaService } from './comida.service';

describe('ComidaService', () => {
  let service: ComidaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComidaService],
    }).compile();

    service = module.get<ComidaService>(ComidaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

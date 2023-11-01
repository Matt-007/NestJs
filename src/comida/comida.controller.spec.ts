import { Test, TestingModule } from '@nestjs/testing';
import { ComidaController } from './comida.controller';

describe('ComidaController', () => {
  let controller: ComidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComidaController],
    }).compile();

    controller = module.get<ComidaController>(ComidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

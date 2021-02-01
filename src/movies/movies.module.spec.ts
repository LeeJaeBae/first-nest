import { MoviesModule } from './movies.module';
import { Test, TestingModule } from '@nestjs/testing';

describe('MoviesModule', () => {
  let moviesModule: MoviesModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      exports: [MoviesModule],
    }).compile();
    moviesModule = module.get<MoviesModule>(MoviesModule);
  });

  it('should be defined', () => {
    expect(moviesModule).toBeDefined();
  });
});
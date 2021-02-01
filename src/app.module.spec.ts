import { AppModule } from './app.module';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesModule } from './movies/movies.module';
import exp from 'constants';

describe('AppModule', () => {
  let appModule: AppModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MoviesModule],
    }).compile();
    appModule = module.get<AppModule>(AppModule);
  });

  it('should be defined', () => {
    expect(appModule).toBeDefined();
  });
});
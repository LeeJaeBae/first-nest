import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // decorator
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hello")
  sayHello():string{
    return 'Hello everyone';
  }

}

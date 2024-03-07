import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decotator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Ip() ip: string): string {
    throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
  }

  @Get('name')
  getName(@Query('name') name: string): string {
    return `${name} hello`;
  }
}

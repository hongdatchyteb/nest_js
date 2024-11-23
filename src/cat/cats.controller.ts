
import { Body, Controller, ForbiddenException, Get, Param, ParseIntPipe, Post, Put, UseFilters } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@Controller('cats')
// @UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: Cat) {
    this.catsService.create(createCatDto);
  }

  @Put()
  async edit(@Body() createCatDto: Cat) {
    throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':age')
  async findBy(@Param('age', ParseIntPipe) age: number): Promise<Cat[]> {
    return this.catsService.findByAge(age);
  } 
}

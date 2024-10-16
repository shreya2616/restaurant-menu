import { HttpException, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository : Repository<Menu>,
  ){}

  async create(createMenuDto: CreateMenuDto) :Promise<Menu> {
    const data = await this.menuRepository.create(createMenuDto)
    return this.menuRepository.save(data);
  }

  async findAll() : Promise<Menu[]>{
    return await this.menuRepository.find();
  }

  async findOne(id: number) : Promise<Menu>{
    const userData = await this.menuRepository.findOneBy({id})
    if(!userData){
      throw new HttpException('Item not found', 404)
    }
    return userData
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    const existingUser = await this.findOne(id)
    const userData = this.menuRepository.merge(
      existingUser,
      updateMenuDto
    )
    return await this.menuRepository.save(userData);
  }

  async remove(id: number) {
    const delUser = await this.findOne(id);
    return await this.menuRepository.remove(delUser);
  }
}

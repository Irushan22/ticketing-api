import { HttpException, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketEntity } from './entities/ticket.entity';
import { Repository } from 'typeorm';
import { error } from 'console';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(TicketEntity)
    private ticketRepository: Repository<TicketEntity>,
  ) {}
  async create(createTicketDto: CreateTicketDto) {
    try {
      const data = await this.ticketRepository.save(createTicketDto);
      return data;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findAll() {
    try {
      const data = await this.ticketRepository.find();
      return data;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.ticketRepository.findOne({
        where: { id: id },
      });
      return data;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    try {
      const data = await this.ticketRepository.update(id, updateTicketDto);
      return data;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async remove(id: number) {
    try {
      const data = await this.ticketRepository.delete(id);
      return data;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}

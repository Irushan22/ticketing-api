import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  project: string;

  @IsNotEmpty()
  reason: string;

  @IsInt()
  priority: number;
}

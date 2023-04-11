import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum PriorityLevel {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

@Entity('ticket')
export class TicketEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  public title: string;

  @Column({ nullable: false })
  public project: string;

  @Column({ nullable: false })
  public reason: string;

  @Column({ nullable: false, type: 'enum', enum: PriorityLevel })
  public priority: PriorityLevel;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}

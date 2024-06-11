import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('history')
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('simple-array', { nullable: false })
  to: string[];

  @Column({ nullable: true })
  subject: string;

  @Column({ nullable: false })
  body: string;

  @Column('simple-json', { nullable: true })
  attachments: { path: string }[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dateTime: Date;
}

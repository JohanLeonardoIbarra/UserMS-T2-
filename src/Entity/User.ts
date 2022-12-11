import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column('varchar', { length: 40 })
  public name!: string;

  @Column('varchar', { length: 40 })
  public surname!: string;

  @Column('varchar', {
    length: 40,
    unique: true,
  })
  public email!: string;

  @Column('varchar')
  public password!: string;
}

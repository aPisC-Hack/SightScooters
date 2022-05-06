import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import GroupModel from './group.model';

@Table({
  createdAt: false,
  updatedAt: false,
})
export default class AuthorityModel extends Model
{
  @Column
  declare authority: string;

  @ForeignKey(() => GroupModel)
  declare groupId: number;

  @BelongsTo(() => GroupModel)
  declare group: GroupModel;
}

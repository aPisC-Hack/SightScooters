import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Optional } from "sequelize/types";
import { ILandmark, ITour } from "common";
import LandmarkModel from "./landmark.model";
import TourModel from "./tour.model";

@Table({
  createdAt: false,
  updatedAt: false,
})
export default class TourLandmarkModel extends Model {
  @ForeignKey(() => TourModel)
  declare tourId: string;

  @ForeignKey(() => LandmarkModel)
  declare landmarkId: string;
}

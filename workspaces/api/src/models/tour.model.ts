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
import TourLandmarkModel from "./tourLandmark.model";

@Table({
  createdAt: false,
  updatedAt: false,
})
export default class TourModel
  extends Model
  implements Omit<Optional<ITour, "id">, "landmarks">
{
  @Column declare time: number;

  @Column declare name: string;

  @Column declare description: string;

  @Column declare rating: number;

  @Column declare ratingCount: number;

  @Column declare isGuided: boolean;

  @Column declare guideName: string;

  @Column declare guideRating: string;

  @Column declare guideCompletedTours: number;

  @Column declare guideRelationshipStatus: string;

  @BelongsToMany(() => LandmarkModel, () => TourLandmarkModel)
  declare landmarks: LandmarkModel[];

  static async addLandmark(tourId: number, landmarkId: number): Promise<void> {
    await TourLandmarkModel.create({
      tourId,
      landmarkId,
    });
  }
}

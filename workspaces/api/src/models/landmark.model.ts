import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Optional } from "sequelize/types";
import { ICoordinate } from "../../../common/src/ICoordinate";
import { ILandmark } from "common";
import TourModel from "./tour.model";
import TourLandmarkModel from "./tourLandmark.model";

@Table({
  createdAt: false,
  updatedAt: false,
})
export default class LandmarkModel
  extends Model
  implements Optional<ILandmark, "id">
{
  @Column
  declare name: string;

  @Column
  declare description: string;

  @Column({
    type: DataType.VIRTUAL,
    get: function () {
      return {
        latitude: this.getDataValue("coord_lat"),
        longitude: this.getDataValue("coord_lon"),
      };
    },
    set: function (val: ICoordinate) {
      this.setDataValue("coord_lat", val.latitude);
      this.setDataValue("coord_lon", val.longitude);
    },
  })
  declare coordinate: ICoordinate;

  @Column
  private declare coord_lon: number;

  @Column
  private declare coord_lat: number;

  @Column
  declare address: string;

  @Column
  declare rating: number;

  @Column
  declare ratingCount: number;

  @Column({
    defaultValue: "",
    type: DataType.STRING,
    get: function () {
      return (this.getDataValue("tags") as string).split(";");
    },
    set: function (val) {
      this.setDataValue("tags", (val as string[]).join(";"));
    },
  })
  declare tags: string[];

  @Column({
    defaultValue: "",
    type: DataType.STRING,
    get: function () {
      return (this.getDataValue("pictures") as string).split(";");
    },
    set: function (val) {
      this.setDataValue("pictures", (val as string[]).join(";"));
    },
  })
  declare pictures: string[];

  @Column
  declare time: number;

  @BelongsToMany(() => TourModel, () => TourLandmarkModel)
  declare tours: TourModel;



  public toJSON() {
    return { ...super.toJSON(), coord_lat: undefined, coord_lon: undefined };
  }
}

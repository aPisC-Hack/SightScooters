import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

export async function bootstrap(options: SequelizeOptions) {
  const sequelize = new Sequelize(options);
  await sequelize.authenticate();
  await sequelize.sync();

  return sequelize;
}


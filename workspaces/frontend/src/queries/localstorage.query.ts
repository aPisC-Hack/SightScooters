import { v4 as uuidv4 } from "uuid";

async function set(key: string, value: any) {
  localStorage.setItem(key, value);
}

async function get(key: string): Promise<any> {
  return localStorage.getItem(key);
}

async function insertEntity(key: string, entity: any) {
  const list = (await get(key)) || [];
  entity = {
    ...entity,
    id: uuidv4(),
  };

  set(key, [...list, entity]);
  return entity;
}

async function deleteEntity(key: string, id: string) {
  const list: Array<any> = (await get(key)) || [];
  set(
    key,
    list.filter((x) => x.id !== id)
  );
}

async function getEntity(key: string, id: string) {
  const list: Array<any> = (await get(key)) || [];
  return list.find((x) => x.id === id);
}

export const LocalStorageQuery = {
  set,
  get,
  insertEntity,
  deleteEntity,
  getEntity,
};

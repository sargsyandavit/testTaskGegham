/**
 * @file.
 * Contain app types.
 */
export type categoryType = {
  id: number,
  name: string,
}

export type dataItem = {
  breeds: [],
  categories: categoryType[],
  id: string,
  url: string,
  width: number,
  height: number
}

export type catInitalStateType = {
  data: dataItem[],
  categores: categoryType[],
}
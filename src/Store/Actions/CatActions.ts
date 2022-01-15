/**
 * @file
 * Contain Cat store actions.
 */
import { SET_CATEGORES, SET_CAT_DATA } from './../ActionTypes/CatActionTypes';
import { getCategores, getCats } from './../../Services/ApiClient';
import { Dispatch } from 'redux';

export const setCategores = () => async (dispach: Dispatch) => {
  const payload = await getCategores();
  dispach({
    type: SET_CATEGORES,
    payload,
  })
};

export const setCatByCategores = (page: number, category: number, isNewCategores: boolean) => async (dispach: Dispatch) => {
  const payload = await getCats(page, category, isNewCategores);
  dispach({
    type: SET_CAT_DATA,
    payload,
    isNewCategores,
  })
};
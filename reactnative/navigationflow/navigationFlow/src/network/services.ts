import api from "./api";
import { endpoints } from "./endpoint";

export const login = (): any => {
  return api().request({
    method: 'get',
    url: endpoints.rlogin,
  });
};

export const getExp = (): any => {
  return api().request({
    method: 'get',
    url: endpoints.experiment,
  });
};

export const submitSelection = (): any => {
  return api().request({
    method: 'get',
    url: endpoints.submitSelection,
  });
};

interface Params {
  [key: string]: string;
}

export default {
  JOIN: '/join',
  MEETING: `/meeting/:meetingId`,
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  ROOT: '/',
};

export const generatePath = (route: string, params: Params) => {
  return Object.entries(params).reduce((aggr: string, [paramName, paramValue]) => {
    return aggr.replace(`:${paramName}`, paramValue);
  }, route);
};

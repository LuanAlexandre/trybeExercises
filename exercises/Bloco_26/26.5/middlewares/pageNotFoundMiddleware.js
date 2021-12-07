const pageNotFound = (_req, _res, next) => next({ status: 404, message: 'Opsss, route not find!' });

export default pageNotFound;

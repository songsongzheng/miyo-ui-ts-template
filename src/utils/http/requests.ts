import axios from '.';

/**
 * @param  promise
 * @param errorExt - Additional Information you can pass to the err object
 */
function to<T, U = unknown>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U | null, T | undefined]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>(err => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }

      return [err, undefined];
    });
}

/**
 * GET methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get<T>(url: string, params = {}): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .get(url, {
          params
        })
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}

/**
 * POST methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post<T>(url: string, data?: Record<string, unknown>): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}

/**
 * PUT methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put<T>(url: string, data?: Record<string, unknown>): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}

/**
 * DELETE methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del<T>(url: string, data?: Record<string, unknown>): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .delete(url, data)
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}

import axios from 'axios';
import querystring from 'qs';

// URL dasar API
const BASE_URL = 'https://jsonplaceholder.typicode.com/';

// Inisialisasi objek axios dengan konfigurasi tertentu
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
  paramsSerializer: (params) => querystring.stringify(params),
});

// Objek yang berisi metode-metode untuk berinteraksi dengan API
const apiMethod = {
  /**
   * Metode untuk mengirim permintaan PUT ke API
   * @param {String} url '/path/to/endpoint'
   * @param {Object} form Data dalam format form-urlencoded (opsional)
   * @param {Object} json Data dalam format JSON (opsional)
   * @returns {Promise} Promise dengan hasil response dari API
   */
  put: (url, form = null, json = {}) => {
    const token = localStorage.getItem('accessToken');
    api.defaults.headers.Authorization = `Bearer ${token}`;
    api.defaults.headers['Content-Type'] = json
      ? 'application/json'
      : 'application/x-www-form-urlencoded';
    const data = querystring.stringify(form) || json;
    return api
      .put(url, data, {
        params: querystring.stringify(form),
        paramsSerializer: {
          indexes: false,
        },
        baseURL: BASE_URL,
      })
      .then((response) => Promise.resolve(response.data))
      .catch((err) => Promise.reject(err));
  },

  /**
   * Metode untuk mengirim permintaan GET ke API
   * @param {String} url '/path/to/endpoint'
   * @param {Object} customConfig Konfigurasi khusus untuk permintaan (opsional)
   * @returns {Promise} Promise dengan hasil response dari API
   */
  get: (url, customConfig = {}) => {
    const token = localStorage.getItem('accessToken');
    api.defaults.headers.Authorization = `Bearer ${token}`;
    return api
      .get(url, {
        paramsSerializer: {
          indexes: false,
        },
        baseURL: BASE_URL,
        ...customConfig,
      })
      .then((response) => Promise.resolve(response.data))
      .catch((err) => Promise.reject(err));
  },

  /**
   * Metode untuk mengirim permintaan POST ke API
   * @param {String} url '/path/to/endpoint'
   * @param {Object} form Data dalam format form-urlencoded (opsional)
   * @param {Object} json Data dalam format JSON (opsional)
   * @param {Object} reqConfig Konfigurasi khusus untuk permintaan (opsional)
   * @returns {Promise} Promise dengan hasil response dari API
   */
  post: (url, form = null, json = {}, reqConfig = {}) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    api.defaults.headers['Content-Type'] = form
      ? 'application/x-www-form-urlencoded'
      : 'application/json';
    const data = querystring.stringify(form) || json;
    return api
      .post(url, data, {
        params: querystring.stringify(form),
        baseURL: BASE_URL,
        paramsSerializer: {
          indexes: false,
        },
        ...reqConfig,
      })
      .then((response) => Promise.resolve(response.data))
      .catch((err) => Promise.reject(err));
  },

  /**
   * Metode untuk mengirim permintaan POST dengan tipe konten multipart/form-data (untuk mengunggah file)
   * @param {String} url '/path/to/endpoint'
   * @param {Object} data Data yang akan dikirim (biasanya berisi file)
   * @param {Object} customConfig Konfigurasi khusus untuk permintaan (opsional)
   * @returns {Promise} Promise dengan hasil response dari API
   */
  postData: (url, data = {}, customConfig = {}) => {
    const token = localStorage.getItem('accessToken');
    api.defaults.headers.Authorization = `Bearer ${token}`;
    api.defaults.headers['Content-Type'] = 'multipart/form-data';
    api.defaults.timeout = 30000;
    const formData = new FormData();
    const keys = Object.keys(data);
    keys.forEach((key) => {
      data[key] instanceof File
        ? formData.append(key, data[key], data[key].name)
        : formData.append(key, data[key]);
    });
    return api
      .post(url, formData, {
        ...customConfig,
      })
      .then((response) => Promise.resolve(response.data))
      .catch((err) => Promise.reject(err));
  },

  /**
   * Metode untuk mengirim permintaan POST dengan tipe konten multipart/form-data (untuk mengunggah file)
   * @param {String} url '/path/to/endpoint'
   * @param {Object} data Data yang akan dikirim (biasanya berisi file)
   * @param {Object} customConfig Konfigurasi khusus untuk permintaan (opsional)
   * @returns {Promise} Promise dengan hasil response dari API
   */
  postDataMultiple: (url, data = {}, customConfig = {}) => {
    const token = localStorage.getItem('accessToken');
    api.defaults.headers.Authorization = `Bearer ${token}`;
    api.defaults.headers['Content-Type'] = 'multipart/form-data';
    api.defaults.timeout = 30000;
    const formData = new FormData();
    const keys = Object.keys(data);
    keys.forEach((key) => {
      data[key] instanceof File
        ? formData.append(key, data[key], data[key].name)
        : formData.append(key, data[key]);
      if (Array.isArray(data[key])) {
        data[key].forEach((data2, index) => {
          data2 instanceof File
            ? formData.append(key, data[key][index], data[key][index].name)
            : formData.append(key, data[key][index]);
        });
      }
    });
    return api
      .post(url, formData, {
        ...customConfig,
      })
      .then((response) => Promise.resolve(response.data))
      .catch((err) => Promise.reject(err));
  },

  /**
   * Metode untuk mengirim permintaan DELETE ke API
   * @param {String} url '/path/to/endpoint'
   * @param {Object} params Parameter kueri (opsional)
   * @returns {Promise} Promise dengan hasil response dari API
   */
  delete: (url, params) => {
    const token = localStorage.getItem('accessToken');
    let newUrl = url;
    if (params) {
      const qparam = querystring.stringify(params);
      newUrl = `${newUrl}?${qparam}`;
    }
    api.defaults.headers.Authorization = `Bearer ${token}`;
    return api
      .delete(newUrl, {
        baseURL: BASE_URL,
        paramsSerializer: {
          indexes: false,
        },
      })
      .then((response) => Promise.resolve(response.data))
      .catch((err) => Promise.reject(err));
  },
  /**
   * Metode untuk mengirim permintaan PUT dengan tipe konten multipart/form-data (untuk mengunggah file)
   * @param {String} url '/path/to/endpoint'
   * @param {Object} data Data yang akan dikirim (biasanya berisi file)
   * @param {Object} customConfig Konfigurasi khusus untuk permintaan (opsional)
   * @returns {Promise} Promise dengan hasil response dari API
   */
  putData: (url, data = {}, customConfig = {}) => {
    const token = localStorage.getItem('accessToken');
    api.defaults.headers.Authorization = `Bearer ${token}`;
    api.defaults.headers['Content-Type'] = 'multipart/form-data';
    api.defaults.timeout = 30000;
    const formData = new FormData();
    const keys = Object.keys(data);
    keys.forEach((key) => {
      data[key] instanceof File
        ? formData.append(key, data[key], data[key].name)
        : formData.append(key, data[key]);
    });
    return api
      .put(url, formData, {
        ...customConfig,
      })
      .then((response) => Promise.resolve(response.data))
      .catch((err) => Promise.reject(err));
  },
};

export default apiMethod;

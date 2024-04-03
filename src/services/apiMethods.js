// apiConfigs is defined in public/index.html just before closing of head tag
const baseUrl = "https://vecmoconbe.thorintech.com/"
// const baseUrl = "https://54.191.26.73/"


function get(url, data = "") {
  let access_token = (localStorage.getItem("accessToken") != null && localStorage.getItem("accessToken") != "") ? localStorage.getItem("accessToken") : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIzIiwibmJmIjoxNzA0NzA4OTEzLjAsImlhdCI6MTcwNDcwODkxMy4wLCJzdWIiOiI5MjUyNjE5NDgiLCJzY29wZXMiOltdLCJqdGkiOiJiNGJjM2NhZjVkMWVhOTlkYzk2YjQzM2NjYzQzMDI0ZTAyM2I0MGM2YjQ5ZjExN2JjMDk5OGY2MWU3ZDI1ZjM2MTU1YWU5ZDIxNjE2ZTc5NSIsImV4cCI6MTcwNzMwMDkxMy4wfQ.gi5oWabPawK6b3v1-9OtE8FQHDZ2JjPGHM_Ah0xGk-gxjuccb9110H8Q_ZtLh-6MaIFmdOpevUhLLjnnKSRCbpciQs6owJbpMdHYeVGV5jcNzhOFy4oB0xAmgkkofLDN-74FUgAwSAoj_xR0L4W00gBcbmMbmA7x1p8g1uWT6ksRGiBmpsn2dHdA3jJJjN8qpsafj0T79hNhIpUsG9tHxnC3nMjVRsZZ3pdcT4TVP169QYBNMAZtZWQ43xd10B4pzVCCYu9GzQbGAW8UK8hMIXy0ffdDNrGvUPpBt7Ac7BCLIMprTrlnhW407-HxnyVx27tbTyZUVJXg9BQq4Ft7Nqam5SgdCa3Cwyh9iGIr5tM-yddcfjyaODG6UzR3TYjNtwhds-cwsZ_Ub-4dyuMzYzT1UxTVhBjPj81gOTkmPN9uQiUoveEC7t27Fxzgz57e4ArNEktYRsl1-0hRGesCxrM7LVHu6-38g33BlMA4WIgCcsdw7mFbezGjerHr-NyNsyN-7HE9jOSxblCNN1otujeAjFbLykCDZDoJPdLP7r97_NnrgEjT4GtMTFZ0wt2joSYZWtEYxp-DBN4mXu6Us6r3cP3q9YZVOsAeIqmx1a_8CMHHuC7AN28QGQESOwLsHZRo0cTjus1tC-PQVdL9jvzYhCB9FLxCqKuukMKCdP4";
  let token = "Bearer " + access_token;
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "GET",
    headers: headers,
  };
  return fetch(baseUrl + url + data, options).then(
    (res) => res.json(),
    (err) => err
  );
}

function getfile(url, data = "") {
//   const signal = controller.signal

  let token = "Bearer " + localStorage.getItem("accessToken");

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "GET",
    headers: headers,
    // signal: signal
  };
  return fetch(baseUrl + url + data, options).then(
    (res) => res,
    (err) => err
  );
}

function post(url, data) {
  let token = "Bearer " + localStorage.getItem("accessToken");
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + url, options).then(
    (res) => res.json(),
    (err) => err
  );
}

function put(url, data) {
  let token = "Bearer " + localStorage.getItem("accessToken");
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + url, options).then(
    (res) => res.json(),
    (err) => err
  );
}

function patch(url, data) {
  let token = "Bearer " + localStorage.getItem("accessToken");
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + url, options).then(
    (res) => res.json(),
    (err) => err
  );
}

function deleteApi(url, data) {
  let token = "Bearer " + localStorage.getItem("accessToken");
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + url, options).then(
    (res) => res.json(),
    (err) => err
  );
}

export {
  get,
  post,
  put,
  patch,
  deleteApi,
  getfile,
};

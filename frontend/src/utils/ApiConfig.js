export const doGetApiCall = async (data) => {
    return new Promise(async (resolve, reject) => {
      let token;
      if (typeof window !== 'undefined') {
        token = localStorage.getItem('token')
      }
      const reqstValues = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token || "",
        },
      };
      fetch(data.url, reqstValues)
        .then((response) => {
          if (response.status === 401) {
            localStorage.clear()
            return response.json();
          } else {
            return response.json();
          }
        })
        .then((data) => resolve(data)
        )
        .catch((error) => reject(error));
    });
  };
  
  export const doPostApiCall = async (data) => {
    return new Promise(async (resolve, reject) => {
      let token;
      if (typeof window !== 'undefined') {
        token = localStorage.getItem('token')
      }
      const reqstValues = {
        method: "POST",
        body: JSON.stringify(data.bodyData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token || "",
        },
      };
      fetch(data.url, reqstValues)
        .then((result) => {
          if (result.status === 401) {
            localStorage.clear()
            return result.json();
          } else {
            return result.json();
          }
        })
        .then((result) => {
          if (result.token) {
            localStorage.setItem("token", result.token);
          }
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  

  export const doDeleteApiCall = async (data) => {
    return new Promise(async (resolve, reject) => {
      let token;
      if (typeof window !== 'undefined') {
        token = localStorage.getItem('token')
      }
      const reqstValues = {
        method: "DELETE",
        body: JSON.stringify(data.bodyData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token || "",
        },
      };
      fetch(data.url, reqstValues)
        .then((response) => {
          if (response.status === 401) {
            localStorage.clear()
            return response.json();
          } else {
            return response.json();
          }
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };
  
  export const doPutApiCall = async (data) => {
    return new Promise(async (resolve, reject) => {
      let token;
      if (typeof window !== 'undefined') {
        token = localStorage.getItem('token')
      }
      const reqstValues = {
        method: "PUT",
        body: JSON.stringify(data.bodyData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token || "",
        },
      };
      fetch(data.url, reqstValues)
        .then((result) => {
          if (result.status === 401) {
            localStorage.clear()
            return result.json();
          } else {
            return result.json();
          }
        })
        .then((result) => {
          if (result.token) {
            localStorage.setItem("token", result.token);
          }
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  
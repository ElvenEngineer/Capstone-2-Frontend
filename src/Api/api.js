import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";



class NewsApi {
    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
    
        const url = `${BASE_URL}/${endpoint}`;
        // const headers = { Authorization: `Bearer ${JoblyApi.token}` };
        const headers = {};
        const params = (method === "get")
            ? data
            : {};
    
        try {
          return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
          console.error("API Error:", err.response);
          let message = err.response.data.error.message;
          throw Array.isArray(message) ? message : [message];
        }

        
      }

      
    

      // Individual API routes

      /** Get the current user. */

      static async getCurrentUser(username) {
        console.log('we are hitting getCurrentUser')
        let res = await this.request(`users/${username}`);
        return res.user;
      }

      /** Get the current news */

      static async getCurrentNews(keyword) {
        let res = await this.request(`news?q=${keyword}`); 
        return res;
      }

      static async getTopNews(country, category) {
        // Set default values for country and category if they are falsy (null, undefined, etc.)
        let effectiveCountry = country || 'us';
        let effectiveCategory = category || '';
    
        let res = await this.request(`home?country=${effectiveCountry}&cat=${effectiveCategory}`);
        return res;
      }

      
      // Get saved articles
      static async getSavedNews(token) {
        console.log('we are hitting getSavedNews in api.js');
        console.log(`Token: ${token}`);
      
        try {
          const response = await axios.get('http://localhost:3001/articles/saved', {
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log(response.data);
          return response.data;
        } catch (error) {
          console.error('Failed to fetch saved news:', error.response);
        }
      }

// Add saved articles
static async addSavedNews(token, articleData) {
  console.log('we are hitting addSavedNews in api.js');
  console.log(`Token: ${token}`);
  console.log('articleData:', articleData);

  try {
    const response = await axios.post('http://localhost:3001/articles/articles', articleData, {
      headers: { Authorization: `Bearer ${token}` }
    });

    return response.data;
  } catch (error) {
    console.error('Failed to save news:', error.response);
  }
}

// removed a saved article
static async removeSavedNews(token, articleData) {
  console.log('we are hitting removeSavedNews in api.js');
  console.log(`Token: ${token}`);
  console.log('articleData:', articleData);

  try {
    const response = await axios.delete('http://localhost:3001/articles/saved?title=' + encodeURIComponent(articleData.title), {
      headers: { Authorization: `Bearer ${token}` }
    });

    return response.data;
  } catch (error) {
    console.error('Failed to delete a news article:', error.response);
  }
}

      
    /** Get token for login from username, password. */

    static async login(data) {
      let res = await this.request(`auth/login`, data, "post");
      return res.token;
    }

    /** Signup for site. */

    static async signup(data) {
      let res = await this.request(`auth/register`, data, "post");
      return res.token;
    }
}

export default NewsApi;

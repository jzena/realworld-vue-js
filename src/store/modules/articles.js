import { api } from "../api";
export default {
  namespaced: true,
  state: {
    feed: [],
    count: 0,
    isLoading: false
  },
  getters: {
    isloading(state) {
      return state.isLoading;
    }
  },
  mutations: {
    setArticles(state, { articles, articlesCount }) {
      state.feed = articles;
      state.count = articlesCount;
    },
    setLoading(state, value) {
      state.isLoading = value;
    }
  },
  actions: {
    async getGlobalFeed({ commit }, payload = { page: 1 }) {
      let route = "/articles";
      if (payload) {
        const {
          tag = null,
          author = null,
          favourited = null,
          page = 1
        } = payload;
        route += tag ? `?tag=${ tag }&` : "";
        route += author ? `?author=${ author }&` : "";
        route += favourited ? `?favourited=${ favourited }&` : "";
        route += page ? `?offset=${ (page - 1) * 10 }&limit=10` : "";
      }
      commit("setLoading", true);
      const response = await api.get(route);
      commit("setArticles", response.data);
      commit("setLoading", false);
    },
    async getUserFeed({ commit }, payload = { page: 1 }) {
      let route = "/articles/feed";
      if (payload) {
        const { page = 1 } = payload;
        route += page ? `?offset=${(page - 1) * 10}&limit=10` : "";
      }
      commit("setLoading", true);
      const response = await api.get(route);
      commit("setArticles", response.data);
      commit("setLoading", false);
    }
  }
};

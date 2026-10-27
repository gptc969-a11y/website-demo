export default {
  async fetch(request, env) {
    // This serves your React app
    return env.ASSETS.fetch(request);
  },
};
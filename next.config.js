module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

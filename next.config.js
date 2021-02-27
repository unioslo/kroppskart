const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  async rewrites() {
    return [
      { source: '/health', destination: '/api/health' },
      { source: '/.well-known/live', destination: '/api/live' },
      { source: '/.well-known/ready', destination: '/api/ready' },
    ];
  },
  basePath: '/kroppskart',
});

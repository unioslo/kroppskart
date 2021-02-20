module.exports = {
  async rewrites() {
    return [
      { source: '/health', destination: '/api/health' },
      { source: '/.well-known/live', destination: '/api/live' },
      { source: '/.well-known/ready', destination: '/api/ready' },
    ];
  },
};

module.exports = {
  name: 'web', 
  build: '.',
  base: 'wordpress', 
  type: 'service',
  volumes: {
    './':'/var/www/html',
  },
  ports: [
    "80:80",
    "443:443"
  ],
  environment: {
    'WORDPRESS_DB_PASSWORD': 'example',
  }
}

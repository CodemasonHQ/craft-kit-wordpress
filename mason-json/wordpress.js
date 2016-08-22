module.exports = {
    name: 'wordpress', 
    image: 'wordpress',
    type: 'instance',
    volumes: {
        './':'/var/www/html',
    },
    ports: [
        "80:80",
    ],
    environment: {
      'WORDPRESS_DB_PASSWORD': 'example',
    }
}
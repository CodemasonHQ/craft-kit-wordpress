module.exports = {
    name: 'mysql',
    image: 'mariadb',
    type: 'service',
    volumes: {
        '/var/lib/mysql':'/var/lib/mysql'
    },
    ports: ["3306:3306"],
    environment: {
      'WORDPRESS_DB_PASSWORD': 'example'
    }
}
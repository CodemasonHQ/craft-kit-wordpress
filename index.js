module.exports = {
  name: 'wordpress',
  default: ["wordpress", "mysql"],
  masonJson: {
  	wordpress: require('./mason-json/wordpress.js'),
  	mysql: require('./mason-json/mysql.js')
  },
}
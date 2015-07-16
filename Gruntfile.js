module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '30%',
            suffix: '_small',
            quality: 20
          },{
            name: 'large',
            width: '50%',
            suffix: '_large',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,JPG,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },

    pagespeed: {
  options: {
    nokey: true,
    url: "http://tomfreestone.co.uk/udacity/1/"
  },
  prod: {
    options: {
      url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
      locale: "en_GB",
      strategy: "desktop",
      threshold: 80
    }
  },
  paths: {
    options: {
      paths: ["/udacity/1", "/portfolio"],
      locale: "en_GB",
      strategy: "desktop",
      threshold: 80
    }
  }
},
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.registerTask('default', ['responsive_images']);

};

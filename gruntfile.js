module.exports = function(grunt)  { 
	
	grunt.initConfig({
	    sass: {
			options: {
				sourceMap: true,
				style: 'minify',
			},
			dist: {
				files: {
					'public/css/custom.css': 'public/sass/custom.scss',
				}
			}
		},

		watch: {
	  		css: {	
				files: '**/*.scss',
				tasks: ['sass']	
			},
		},
	});
   
   	grunt.loadNpmTasks('grunt-contrib-uglify');
   	grunt.loadNpmTasks('grunt-contrib-watch');
   	require('load-grunt-tasks')(grunt);

  	grunt.registerTask('default', [ 'sass','watch']);

}; 
  
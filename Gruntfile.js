'use strict';

module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app'
    };
	var phantomflowConfig = {
		test: {
			tests: '/tests/test.js'
		},
		report: {} // this task is reserved for reporting only
	};


    grunt.initConfig({
        yeoman: yeomanConfig,
		decision: phantomflowConfig,
        watch: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= yeoman.app %>/*.html',
                '<%= yeoman.app %>/styles/{,*/}*.css',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
				'<%= yeoman.app %>/tests/{,*/}*.{js,html}',
				'<%= yeoman.app %>/report/{,*/}*.{js,html}',
				'<%= yeoman.app %>/build/{,*/}*.{js,html}',
				'<%= yeoman.app %>/temp/{,*/}*.{js,html}',
                '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    open: true,
                    base: [
                        '<%= yeoman.app %>/tests',
						"<%= yeoman.app %>/build/report/coverage",
                        '<%= yeoman.app %>'
                    ]
                }
            }
        },
		qunit: {
			options: {
				timeout: 30000,
				"--web-security": "no",
				coverage: {
					src: [ "<%= yeoman.app %>/scripts/main.js" ],
					instrumentedFiles: "temp/",
					coberturaReport: "report/",
					htmlReport: "<%= yeoman.app %>/build/report/coverage",
					lcovReport: "<%= yeoman.app %>/build/report/lcov",
					linesThresholdPct: 70
				}
			},
			files: ["<%= yeoman.app %>/tests/index.html"]
		},
		coveralls: {
			options: {
			// dont fail if coveralls fails
				force: true
			},
			main_target: {
				src: "<%= yeoman.app %>/build/report/lcov/lcov.info"
			}
		},
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
		mutationTest: {
			options: {
				test: 'grunt test'
			},
			target: {
				code: ['scripts/main.js'],
				specs: 'scripts/test.js',
				mutate: 'scripts/main.js'
			}
		}
    });

    grunt.registerTask('server', function(target) {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });
    grunt.registerTask('test', function(target) {
        grunt.task.run([
            'connect:test',
            'watch'
        ]);
    });
	grunt.registerTask('qunit', function(target) {
        grunt.task.run([
            'connect:qunit',
            'watch'
        ]);
    });
	grunt.registerTask("default", [ "qunit", "server", "test"]);

	// These plug-ins provide necessary tasks.
	grunt.loadNpmTasks('grunt-mutation-testing');
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-coveralls");
	grunt.loadNpmTasks("grunt-qunit-istanbul");
	grunt.loadNpmTasks('grunt-phantomflow');
	//grunt.loadNpmTasks("grunt-contrib-concat");
	//grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

};

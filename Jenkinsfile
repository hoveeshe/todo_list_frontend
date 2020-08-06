pipeline {
	agent any
	stages{
		stage('Pull') {
			steps{
				git credentialsId: '78dde4b7-42ed-4583-8224-b284c5a8b27e', url: 'https://github.com/ita2020hovees/todo_list_frontend.git'
			}
		}
		stage('Build') {
			steps{
				script {
					sh "cnpm install"
					sh "npm build"
				}
			}
		}
	}
}

pipeline {
	agent any
	stages{
		stage('Build') {
			steps{
				bat label: '', script: '''npm install
				npm run build'''
			}
		}
	}
}

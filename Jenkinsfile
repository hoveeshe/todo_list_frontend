pipeline {
	agent any
	stages{
		stage('Install') {
			steps {
				bat label: '', script: 'npm install'
			}
		}
		stage('Build') {
			steps {
				bat label: '', script: 'npm run build'
			}
		}
	}
}

pipeline {
	agent any
	stages{
		stage('Build') {
			steps{
				bat label: '', script: 'cnpm install'
				bat label: '', script: 'npm run build'
			}
		}
	}
}

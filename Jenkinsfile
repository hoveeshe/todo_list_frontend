pipeline {
	agent any
	stages{
		stage('Build') {
			steps{
				bat label: '', script: 'npm run build'
			}
		}
	}
}

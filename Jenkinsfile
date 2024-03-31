pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
				dir('/home/ubuntu/aws-ec2-jenkins-tuto') {				
					//Git 저장소에서 소스코드를 가져옵니다.
					git branch: 'main', credentialsId: 'github_token', url: 'https://github.com/JSBeatCode/aws-ec2-jenkins-tuto.git'
				}
            }
        }
        
        stage('Build') { 
            steps {
        	    sh 'cd /var/lib/jenkins/workspace/aws-ec2-jenkins-tuto2 &&'
            }
        }
    }
}

pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
		// 현재 디렉토리를 기록합니다.
                script {
                    def currentDir = pwd()
                    // Git 코드를 가져올 위치로 이동합니다.
                    sh "cd /home/ubuntu/aws-ec2-jenkins-tuto && git pull"
                    // 이전 디렉토리로 복귀합니다.
                    sh "cd ${currentDir}"
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

pipeline {
    agent any
    
    stages {
        
        stage('Install Dependencies') {
            steps {
                // nodejs의 nodeJSInstallationName는 Jenkins 관리 > plugin > nodejs 설치 > Jenkins 관리 > Tools > Nodejs 등록시의 name이다.
                nodejs(nodeJSInstallationName: 'aws-ec2-jenkins-node') {
                    sh 'npm install'
                }
            }
        }
        // 여기에 추가적인 스테이지들을 추가할 수 있음
        stage('Build') {
            steps {
                // nodejs의 nodeJSInstallationName는 Jenkins 관리 > plugin > nodejs 설치 > Jenkins 관리 > Tools > Nodejs 등록시의 name이다.
                nodejs(nodeJSInstallationName: 'aws-ec2-jenkins-node') { // 위의 설정에서 지정한 node 이름
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                // nodejs의 nodeJSInstallationName는 Jenkins 관리 > plugin > nodejs 설치 > Jenkins 관리 > Tools > Nodejs 등록시의 name이다.
                nodejs(nodeJSInstallationName: 'aws-ec2-jenkins-node') {
                    // sh 'npx pm2 start index.cjs'
                    sh 'ls -al'
                }
            }
        }
    }
    // post 옵션을 사용하여 파이프라인 실행 결과를 처리할 수 있음
    post {
        success {
            echo 'Build 성공!'
            // 여기에 추가적인 작업을 추가할 수 있음
        }
        failure {
            echo 'Build 실패 :('
            // 여기에 실패 시 처리할 작업을 추가할 수 있음
        }
    }
}

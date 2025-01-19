pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/RajeshSSFL/test.git', branch: 'main'
            }
        }

        stage('Build'){
            steps{
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Check if http://localhost:3000/ is up
                bat 'curl -I http://localhost:3000/'

                // Check if http://localhost:8000/test is up
                bat 'curl -I http://localhost:8000/test'

                //bat 'npm test'
            }
        }
    }
}

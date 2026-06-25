pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/shaikfathima14/AI-Website-Builder.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker compose build'
                bat 'docker compose up -d'
            }
        }

        stage('Start Containers') {
            steps {
                bat 'docker compose up -d'
            }
        }
    }
}
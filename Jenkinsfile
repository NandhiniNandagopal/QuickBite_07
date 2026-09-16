pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out the QuickBite project...'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the QuickBite application...'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests...'
                bat 'npm test -- --run'
            }
        }

        stage('Report') {
            steps {
                echo 'Generating test report...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying QuickBite application...'
                echo 'Deployment completed successfully.'
            }
        }
    }

    post {
        success {
            echo 'QuickBite CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'QuickBite CI/CD Pipeline failed. Check the console output.'
        }
    }
}
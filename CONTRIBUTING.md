# Contributing Guide

Thank you for your interest in contributing to this block-based programming project! We're excited to work with you.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How to Contribute?](#how-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Improvements](#suggesting-improvements)
- [Pull Request Process](#pull-request-process)
- [Code Standards](#code-standards)
- [Environment Setup](#environment-setup)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute?

### Reporting Bugs
If you find a bug, please:
1. Search [existing issues](https://github.com/your-username/your-repository/issues) to avoid duplicates
2. Create a new issue using the bug report template
3. Include detailed information:
    - Operating system and version
    - Java and JavaFX versions
    - Steps to reproduce the bug
    - Expected vs actual behavior
    - Screenshots if possible

### Suggesting Improvements
For new features:
1. Use the feature request template
2. Describe the problem it solves
3. Explain how it should work
4. Include usage examples if possible

## Pull Request Process

1. **Fork** the repository
2. Create a descriptive branch:
   ```bash
   git checkout -b feature/new-functionality
   # or
   git checkout -b fix/error-correction
   ```
3. Follow code standards.
4. Add tests for your changes.
5. Update documentation.
6. Run local tests:
    ```bash
   mvn test
   ```
7. Commit with semantic messages:
    ```bash
   git commit -m "feat: add drag and drop for blocks"
    ```
8. Push to your fork:
    ```bash
   git push origin feature/new-functionality
    ```
9. Open a Pull Request (please, checkout [PR_Template](.github/pull_request_template.md))

## Code Standards

### MVC Structure

- **Model**: Business logic and data.
- **View**: User Interface (FXML/CSS).
- **Controller**: Event handling and coordination.

### Java Conventions

- Follow Java naming conventions.
- Use Javadoc comments for public classes and methods.
- Keep methods small with single responsibility.
- Use descriptive names for variables and methods.

### Testing

- Write unit tests for new functionality
- Maintain coverage above 80%
- Use descriptive names for tests

## Environment setup

### Requirements

- JDK 21+
- Maven 4.0+
- IntelliJ IDEA (recommended)

### Setup

1. Clone your fork:
    ```bash
   git clone https://github.com/CodeCorrupted/DgramStudio.git
    ```
2. Import into IntelliJ as Maven project
3. Configure JDK 21 in Project Structure
4. Run:
    ```bash
   mvn clean compile
    ```

Thank you for contributing!
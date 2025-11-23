# Contributing to BlueMind

Thank you for your interest in contributing to BlueMind Ocean Restoration Platform! 🌊

We welcome contributions from everyone. This document provides guidelines for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members
- Accept constructive criticism gracefully

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/bluemind.git
   cd bluemind
   ```
3. **Set up the development environment** (see README.md)
4. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

### Types of Contributions

- 🐛 **Bug fixes** - Fix issues in the codebase
- ✨ **New features** - Add new functionality
- 📚 **Documentation** - Improve or add documentation
- 🎨 **UI/UX improvements** - Enhance user interface
- ⚡ **Performance** - Optimize code performance
- ♿ **Accessibility** - Improve accessibility
- 🧪 **Tests** - Add or improve tests
- 🔧 **Tooling** - Improve development tools

### Areas We Need Help

- Adding more AI/ML models for predictions
- Improving real-time data visualization
- Adding more sensor types and IoT integrations
- Writing tests (unit, integration, e2e)
- Improving documentation
- Translating to other languages
- Mobile app development
- Accessibility improvements

## Development Workflow

### 1. Set Up Development Environment

#### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your settings
python -m app.main
```

#### Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your settings
npm run dev
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the coding standards (see below)
- Add tests for new features
- Update documentation as needed
- Test your changes thoroughly

### 3. Test Your Changes

#### Backend
```bash
cd backend
pytest
python test_api.py
```

#### Frontend
```bash
cd frontend
npm run lint
npm run build  # Ensure it builds without errors
```

### 4. Commit Your Changes

Follow our commit message guidelines (see below).

```bash
git add .
git commit -m "feat: add new sensor type support"
```

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Coding Standards

### TypeScript/JavaScript (Frontend)

- Use TypeScript for type safety
- Follow ESLint rules (configured in `.eslintrc.json`)
- Use functional components with hooks
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Keep components small and focused
- Use Tailwind CSS for styling

#### Example:
```typescript
interface UserProfile {
  id: number;
  name: string;
  email: string;
}

export function UserCard({ user }: { user: UserProfile }) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-bold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
}
```

### Python (Backend)

- Follow PEP 8 style guide
- Use type hints
- Write docstrings for functions and classes
- Keep functions small and focused
- Use async/await for I/O operations
- Handle errors appropriately

#### Example:
```python
async def get_simulation(
    simulation_id: int,
    db: AsyncSession
) -> SimulationResponse:
    """
    Retrieve a simulation by ID.
    
    Args:
        simulation_id: The ID of the simulation
        db: Database session
        
    Returns:
        SimulationResponse object
        
    Raises:
        HTTPException: If simulation not found
    """
    simulation = await db.get(Simulation, simulation_id)
    if not simulation:
        raise HTTPException(status_code=404, detail="Simulation not found")
    return SimulationResponse.from_orm(simulation)
```

### General Guidelines

- **DRY (Don't Repeat Yourself)** - Avoid code duplication
- **KISS (Keep It Simple, Stupid)** - Prefer simple solutions
- **YAGNI (You Aren't Gonna Need It)** - Don't add unnecessary features
- **Write self-documenting code** - Use clear names and structure
- **Comment complex logic** - Explain the "why", not the "what"
- **Test your code** - Ensure it works as expected

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```
feat(sensors): add support for pH sensor data

- Add pH field to sensor model
- Update sensor reading schema
- Add pH visualization to dashboard

Closes #123
```

```
fix(auth): resolve token expiration issue

The JWT tokens were expiring too early due to incorrect
time calculation. This fixes the issue by using UTC time
consistently.

Fixes #456
```

```
docs: update deployment guide with PostgreSQL setup

Add detailed instructions for setting up PostgreSQL
on Render, including connection string format and
migration steps.
```

## Pull Request Process

### Before Submitting

1. ✅ Update relevant documentation
2. ✅ Add tests for new features
3. ✅ Ensure all tests pass
4. ✅ Run linters and fix issues
5. ✅ Test locally (frontend and backend)
6. ✅ Update CHANGELOG.md if needed
7. ✅ Rebase on latest main branch

### PR Template

When creating a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added and passing
- [ ] Dependent changes merged
```

### Review Process

1. Maintainers will review your PR
2. Address any feedback or requested changes
3. Once approved, a maintainer will merge your PR
4. Your contribution will be included in the next release!

## Reporting Bugs

### Before Reporting

- Check existing issues to avoid duplicates
- Test with the latest version
- Gather relevant information (logs, screenshots, etc.)

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the issue

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
- OS: [e.g., Windows 10, macOS 12]
- Browser: [e.g., Chrome 96]
- Version: [e.g., 1.0.0]

**Additional context**
Any other relevant information
```

## Suggesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
Clear description of the problem

**Describe the solution you'd like**
Detailed description of the proposed feature

**Describe alternatives you've considered**
Alternative solutions or features

**Additional context**
Mockups, examples, or relevant information

**Would you like to work on this?**
- [ ] Yes, I'd like to implement this
- [ ] No, just suggesting
```

## Development Tips

### Useful Commands

```bash
# Backend
cd backend
pytest -v  # Run tests with verbose output
pytest --cov=app  # Run tests with coverage
python -m app.main  # Run development server

# Frontend
cd frontend
npm run dev  # Development server
npm run build  # Production build
npm run lint  # Run linter
npm run lint:fix  # Fix linter issues

# Docker
docker-compose up --build  # Build and start all services
docker-compose logs -f backend  # View backend logs
docker-compose down  # Stop all services
```

### Debugging

- Use `print()` and `console.log()` for quick debugging
- Use debugger tools (pdb for Python, Chrome DevTools for frontend)
- Check logs in Render dashboard for production issues
- Use FastAPI's interactive docs at `/docs` for API testing

### Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Questions?

If you have questions about contributing:

- Open a discussion on GitHub
- Check existing documentation
- Ask in pull request comments
- Contact maintainers

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Given credit in the project

Thank you for helping make BlueMind better! 🌊💙

---

**Happy Contributing!**

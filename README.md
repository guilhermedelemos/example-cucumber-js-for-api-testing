# Example Cucumber.js For API Testing

Cucmber.js example for API testing

## How to run it

### Test

```
$ NODE_ENV=staging yarn test
```

### Code lint

```
$ yarn lint
```

### Commit message helper

```
$ yarn commit
```

## Dependencies

- Do not update Husky to version >= 5, it's license is incompatible with us.

| Dev Dependency                  | Description                                                                      |
|---------------------------------|----------------------------------------------------------------------------------|
| @commitlint/cli                 | Enable commit lint messages                                                      |
| @commitlint/config-conventional | Conventional commit lint configuration                                           |
| commitizen                      | Utility tool to help write commit messages based on the commitlint configuration |
| cz-conventional-changelog       | Enables the conventional changelog standard                                      |
| eslint                          | Code lint utility tool                                                           |
| eslint-config-airbnb-base       | Airbnb code style                                                                |
| eslint-plugin-import            | Enables ES6+ import/export syntax to eslint                                      |

## Good to have

- Alluje-JS, not compatible with Cucumber 7, https://github.com/allure-framework/allure-js
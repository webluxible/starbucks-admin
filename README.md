# Front End Setting guide

## 1. Install Node

- Install from homepage (https://nodejs.org)
- Install by package manager
  ```bash
  brew install node
  ```

## 2. Install Yarn

```bash
npm install -g yarn
```

## 3. Create front-end project

```bash
# format
npx create-react-app {project name}

# example
npx create-react-app starbucks-admin
```

## 4. Start project

```bash
npm run start
# or
yarn start
```

## 5. Install material-ui

```bash
npm install @material-ui/core
# or
yarn add @material-ui/core
```

---

# Best Directory Structure in React with create-react-app

```text
├── node_modules      # dependency javascript modules
├── public            # static file
└── src               # javascript main files
    ├── common        # common source (locales, styles, utils, types, etc...)
    │   ├── locales   #
    │   ├── styles    #
    │   └── utils     #
    ├── components    # pure component
    ├── containers    # component with api or business logic or state...
    ├── pages         # page component (block of @components and @containers)
    └── modules       # state management library and asynchronous, business logic
```

# Task Scheduler

Task Scheduler is a simple JavaScript package that allows you to schedule and manage tasks within your Node.js applications.

## Installation

Install the package via npm:

```bash
npm install vldslvz-task-scheduler
```

## Usage

1. Require the `TaskScheduler` class in your Node.js application:

    ```javascript
    const TaskScheduler = require('your-task-scheduler-package-name');
    ```

2. Create a new instance of `TaskScheduler`:

    ```javascript
    const scheduler = new TaskScheduler();
    ```

3. Define your task function:

    ```javascript
    function myTask() {
      console.log('Executing my task...');
    }
    ```

4. Schedule your task to run at a specified interval:

    ```javascript
    scheduler.scheduleTask(myTask, intervalInMilliseconds);
    ```

5. Cancel all tasks when they are no longer needed:

    ```javascript
    scheduler.cancelAllTasks();
    ```

## Example

```javascript
const TaskScheduler = require('your-task-scheduler-package-name');

// Create a new instance of TaskScheduler
const scheduler = new TaskScheduler();

// Define a task function
function myTask() {
  console.log('Executing my task...');
}

// Schedule the task to run every 2 seconds
scheduler.scheduleTask(myTask, 2000);

// After some time, cancel all tasks
setTimeout(() => {
  scheduler.cancelAllTasks();
  console.log('All tasks cancelled.');
}, 10000); // Cancel after 10 seconds
```

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

class TaskScheduler {
    constructor() {
      this.tasks = [];
      this.intervalId = null;
    }
  
    scheduleTask(task, interval) {
      const taskObj = { task, interval };
      this.tasks.push(taskObj);
      if (!this.intervalId) {
        this.intervalId = setInterval(() => this.runTasks(), interval);
      }
    }
  
    runTasks() {
      this.tasks.forEach(taskObj => {
        const { task, interval } = taskObj;
        task();
      });
    }
  
    cancelAllTasks() {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.tasks = [];
    }
  }
  
  module.exports = TaskScheduler;
  
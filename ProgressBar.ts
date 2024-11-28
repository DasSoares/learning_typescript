function updateProgressBar(progress, callback) {
  process.stdout.write(`Progresso: ${progress} %`);
  if (callback) {
    callback();
  }
}

function task1(callback) {
  setTimeout(() => {
    console.log(" - Task 1 completed");
    callback(30); // 30% do progresso
  }, 1000); // Simula uma operação assíncrona com 1s de delay
}

function task2(callback) {
  setTimeout(() => {
    console.log(" - Task 2 completed");
    callback(60); // 60% do progresso
  }, 2000); // Simula uma operação assíncrona com 2s de delay
}

function task3(callback) {
  setTimeout(() => {
    console.log(" - Task 3 completed");
    callback(100); // 100% do progresso
  }, 1500); // Simula uma operação assíncrona com 1.5s de delay
}

function performTasks() {
  task1((progress1) => {
    //
    updateProgressBar(progress1, () => {
      //
      task2((progress2) => {
        //
        updateProgressBar(progress2, () => {
          //
          task3((progress3) => {
            //
            updateProgressBar(progress3, () => {
              console.log("All tasks completed!");
            });
          });
        });
      });
    });
  });
}

performTasks();

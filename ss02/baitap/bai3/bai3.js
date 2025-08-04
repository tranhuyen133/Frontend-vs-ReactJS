const typeConsole = (type = "log") => {
  console[type](`Đây là type: ${type}`);
};

typeConsole();         
typeConsole("warn");  
typeConsole("error"); 

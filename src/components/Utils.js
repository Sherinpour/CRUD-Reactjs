(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    Date.prototype.getMonthName = function() {
        return months[ this.getMonth() ];
    };
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
})();

export const generateId = () => {
    return Math.floor(Date.now() / 1000);
};

export const updateTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

export const generateGroupOfTodos = (idOfTodo) => {
    let todoDate =  new Date(idOfTodo * 1000);
    let dateOfTodoId = `todos${todoDate.getDate()}${todoDate.getMonth()}`;
    return dateOfTodoId;
};

export const generateDateOfTodos = (idOfTodos, todos) => {
    let idDate =  Object.keys(todos[idOfTodos])[0];
    let date =  new Date(idDate * 1000);
    return date;
};

export const themeSwitcher = (e) => {
    var darkTheme = e.target.classList.toggle('dark');
    if (darkTheme) {
        document.documentElement.style.setProperty('--background-color', '#1e1d1d')
        document.documentElement.style.setProperty('--text-color', '#f0ecec')
        document.documentElement.style.setProperty('--table-tr-color', '#e6dada')
        document.documentElement.style.setProperty('--table-striped-bg', '#393939')
        document.documentElement.style.setProperty('--table-box-shadow-color', '#393939')
        document.documentElement.style.setProperty('--theme-toogle-btn-color', '#f0ecec')
    } else {
        document.documentElement.style.setProperty('--background-color', 'white')
        document.documentElement.style.setProperty('--text-color', 'black')
        document.documentElement.style.setProperty('--table-tr-color', 'black')
        document.documentElement.style.setProperty('--table-striped-bg', 'rgba(0, 0, 0, 0.05)')
        document.documentElement.style.setProperty('--table-box-shadow-color', '#DDD3D3')
        document.documentElement.style.setProperty('--theme-toogle-btn-color', 'black')
    }
}

